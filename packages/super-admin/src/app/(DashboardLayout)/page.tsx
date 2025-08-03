"use client";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import type { ElementType } from "react";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
// components
import SalesOverview from "@/app/(DashboardLayout)/components/dashboard/SalesOverview";
import YearlyBreakup from "@/app/(DashboardLayout)/components/dashboard/YearlyBreakup";
import RecentTransactions from "@/app/(DashboardLayout)/components/dashboard/RecentTransactions";
import ProductPerformance from "@/app/(DashboardLayout)/components/dashboard/ProductPerformance";
import Blog from "@/app/(DashboardLayout)/components/dashboard/Blog";
import MonthlyEarnings from "@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings";

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box >
        <Grid container spacing={3} component={"div" as ElementType}>
          <Grid
            item
            size={{ xs: 12, md: 8, lg: 8 }}
            component={"div" as ElementType}
          >
            <SalesOverview />
          </Grid>
          <Grid
            item
            size={{ xs: 12, md: 4, lg: 4 }}
            component={"div" as ElementType}
          >
            <Grid container spacing={3} component={"div" as ElementType}>
              <Grid
                item
                size={{ xs: 12, md: 12, lg: 12 }}
                component={"div" as ElementType}
              >
                <YearlyBreakup />
              </Grid>
              <Grid
                item
                size={{ xs: 12, md: 12, lg: 12 }}
                component={"div" as ElementType}
              >
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            size={{ xs: 12, md: 4, lg: 4 }}
            component={"div" as ElementType}
          >
            <RecentTransactions />
          </Grid>
          <Grid
            item
            size={{ xs: 12, md: 8, lg: 8 }}
            component={"div" as ElementType}
          >
            <ProductPerformance />
          </Grid>
          <Grid
            item
            size={{ xs: 12, md: 12, lg: 12 }}
            component={"div" as ElementType}
          >
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
