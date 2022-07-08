const size = {
    xs: "600px",
    sm: "768px",
    lg: "1200px",
    xl:"1400px",
   }
   const device = {
    xsmax: `(max-width: ${size.xs})`,
    xsmin: `(min-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`,
   }
   export default {size, device};