import { Typography, useTheme } from "@mui/material"
import FlexBetween from "../../components/FlexBetween"
import WidgetWrapper from "../../components/WidgetWrapper"
import lapi from '../../assets/lapi.jpg'

const AdvertWidget = () => {
    const { palette } = useTheme()
    const dark = palette.neutral.dark
    const medium = palette.neutral.medium
    const main = palette.neutral.main;

    return (
        <WidgetWrapper>
        <FlexBetween>
          <Typography color={dark} variant="h5" fontWeight="500">
            Sponsored
          </Typography>
          <Typography color={medium}>Create Ad</Typography>
        </FlexBetween>
        <img
          width="100%"
          height="auto"
          alt="advert"
          src={lapi}
          style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
        />
        <FlexBetween>
          {/* <Typography color={main}>Chimnadindu</Typography> */}
          <Typography color={medium}>github.com/emmanueldindu</Typography>
        </FlexBetween>
        <Typography color={medium} m="0.5rem 0">
         I'm a peal fullstark developer. I solve problems with codes, I'm open to Job opportunities and gigs. send me a mail at emmanuelnwobodoc04@gmail.com
        </Typography>
      </WidgetWrapper>
)

}


export default AdvertWidget