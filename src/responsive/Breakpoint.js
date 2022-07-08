const size = {
    sm: "600px",
    md: "768px",
    lg: "1200px",
    xl:"1400px",
    xxl:"1600px",
   }
   const device = {
    smmax: `(max-width: ${size.sm})`,
    smmin: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`,
    xxl: `(min-width: ${size.xxl})`,
   }
   export default {size, device};