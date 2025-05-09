import { useMediaQuery, Box, Drawer } from "@mui/material";
import SidebarItems from "./SidebarItems";
import { Upgrade } from "./Updrade";
import Image from "next/image";

interface ItemType {
  isMobileSidebarOpen: boolean;
  onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
  isSidebarOpen: boolean;
}

const MSidebar = ({
  isMobileSidebarOpen,
  onSidebarClose,
  isSidebarOpen,
}: ItemType) => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  const sidebarWidth = "270px";

  // Custom CSS for short scrollbar
  const scrollbarStyles = {
    "&::-webkit-scrollbar": {
      width: "7px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#eff2f7",
      borderRadius: "15px",
    },
  };

  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          variant="permanent"
          PaperProps={{
            sx: {
              width: sidebarWidth,
              boxSizing: "border-box",
              border: "0px",
              backgroundColor: "white",
              boxShadow: "0px 7px 30px 0px rgba(90, 114, 123, 0.11)",
              ...scrollbarStyles,
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              padding: "20px",
            }}
          >
            {/* Logo */}
            <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
              <Image
                src="/images/logos/dark-logo.svg"
                alt="logo"
                width={180}
                height={40}
                priority
              />
            </Box>

            {/* Sidebar Items */}
            <SidebarItems />
            <Upgrade />
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant="temporary"
      PaperProps={{
        sx: {
          width: sidebarWidth,
          boxShadow: (theme) => theme.shadows[8],
          backgroundColor: "white",
          ...scrollbarStyles,
        },
      }}
    >
      <Box sx={{ padding: "20px" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <Image
            src="/images/logos/dark-logo.svg"
            alt="logo"
            width={180}
            height={40}
            priority
          />
        </Box>

        {/* Sidebar Items */}
        <SidebarItems />
        <Upgrade />
      </Box>
    </Drawer>
  );
};

export default MSidebar;
