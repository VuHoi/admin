'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{ 
          minHeight: '100vh', 
          backgroundColor: '#f9fafb', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <div style={{ 
            maxWidth: '400px', 
            width: '100%', 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
            padding: '32px', 
            textAlign: 'center' 
          }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: 'bold', 
              color: '#111827', 
              marginBottom: '16px' 
            }}>
              Something went wrong!
            </h2>
            <p style={{ 
              color: '#6b7280', 
              marginBottom: '24px' 
            }}>
              {error.message || 'An unexpected error occurred. Please try again.'}
            </p>
            <button
              onClick={reset}
              style={{
                backgroundColor: '#2563eb',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
} 