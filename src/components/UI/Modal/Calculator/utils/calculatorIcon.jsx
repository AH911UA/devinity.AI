import iconWeb from "../../../../../images/svg/calculator/iconWeb-white.svg"
import iconWebHover from "../../../../../images/svg/calculator/iconWeb-green.svg"
import iconApp from "../../../../../images/svg/calculator/iconMobile-white.svg"
import iconAppHover from "../../../../../images/svg/calculator/iconMobile-green.svg"
import iconDesktop from "../../../../../images/svg/calculator/iconDesktop-white.svg"
import iconDesktopHover from "../../../../../images/svg/calculator/iconDesktop-green.svg"
import iconLoT from "../../../../../images/svg/calculator/iconLot-white.svg"
import iconLoTHover from "../../../../../images/svg/calculator/iconLot-green.svg"
import iconBoth from "../../../../../images/svg/calculator/iconBoth-white.svg"
import iconBothHover from "../../../../../images/svg/calculator/iconBoth-green.svg"

import iconClassic from "../../../../../images/svg/calculator/iconClassic-white.svg"
import iconClassicHover from "../../../../../images/svg/calculator/iconClassic-green.svg"
import iconBlockchain from "../../../../../images/svg/calculator/iconBlockchain-white.svg"
import iconBlockchainHover from "../../../../../images/svg/calculator/iconBlockchain-green.svg"

const calculatorIcon = (name) => {
  switch (name) {

    case "Website":
      return {
        normal: iconWeb,
        hover: iconWebHover
      }
      break;

    case "App":
      return {
        normal: iconApp,
        hover: iconAppHover
      }
      break;

    case "Desktop":
      return {
        normal: iconDesktop,
        hover: iconDesktopHover
      }
      break;

    case "LoT":
      return {
        normal: iconLoT,
        hover: iconLoTHover
      }
      break;

    case "Both":
      return {
        normal: iconBoth,
        hover: iconBothHover
      }
      break;

    case "classic":
      return {
        normal: iconClassic,
        hover: iconClassicHover
      }
      break;

    case "blockchain":
      return {
        normal: iconBlockchain,
        hover: iconBlockchainHover
      }
      break;

    default:
      return {
        normal: null,
        hover: null
      }
      break;
  }
}

export default calculatorIcon;
