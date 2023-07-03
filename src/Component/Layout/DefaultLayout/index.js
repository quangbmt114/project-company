import Footer from "./Footer";
import Header from "./Header";
import ThemeProvider from 'react-bootstrap/ThemeProvider'
function DefaultLayout({children}) {
  return (
    
    <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
  >
    <div>
      <Header />
      <div className="content">
            {children}
      </div>
      <Footer />
    </div>
  </ThemeProvider>
  );
}

export default DefaultLayout;
