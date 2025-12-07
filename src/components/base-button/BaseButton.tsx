import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import {
  AttachMoney as MdAttachMoney,
  Check as MdCheck,
  Close as MdClose,
  ContentCopy as MdContentCopy,
  FileUpload as MdFileUpload,
  FilterAlt as MdFilterAlt,
  FilterAltOff as MdFilterAltOff,
  FilterList as MdFilterList,
  HourglassTop as MdHourglassTop,
  Sync as MdSync,
  Upload as MdUpload,
  Download as MdDownload,
} from "@mui/icons-material";

interface BaseButtonProps {
  label: string | React.ReactNode;
  size?: "sm" | "lg";
  style?: React.CSSProperties;
  className?: string;
  type?: "submit" | "button" | "reset";
  color?: "primary" | "secondary";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  iconType?:
    | "add"
    | "edit"
    | "accept"
    | "invited"
    | "rejected"
    | "delete"
    | "resend"
    | "upload"
    | "sync"
    | "copy"
    | "view"
    | "verify"
    | "check"
    | "x"
    | "dollar"
    | "filter"
    | "filter-on"
    | "filter-off"
    | "import-csv"
    | "download"
    | null;
  disabled?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  label,
  color = 'primary',
  onClick = () => {},
  type,
  iconType = null,
  disabled = false,
  className,
  size,
  style,
  isLoading = false,
  fullWidth = true,
}) => {
  const renderIcon = () => {
    const iconProps = {
      className: `h-5 w-5 ${size === "lg" ? "h-6 w-6" : "h-5 w-5"}`,
    };

    switch (iconType) {
      case "edit":
        return <EditOutlinedIcon {...iconProps} />;
      case "accept":
        return <CheckCircleOutlineOutlinedIcon {...iconProps} />;
      case "invited":
        return <MarkEmailReadOutlinedIcon {...iconProps} />;
      case "rejected":
        return <BlockOutlinedIcon {...iconProps} />;
      case "delete":
        return <DeleteOutlineOutlinedIcon {...iconProps} />;
      case "resend":
        return <SendOutlinedIcon {...iconProps} />;
      case "add":
        return <AddOutlinedIcon {...iconProps} />;
      case "view":
        return <VisibilityOutlinedIcon {...iconProps} />;
      case "upload":
        return <MdFileUpload {...iconProps} />;
      case "sync":
        return <MdSync {...iconProps} />;
      case "verify":
        return <MdHourglassTop {...iconProps} />;
      case "copy":
        return <MdContentCopy {...iconProps} />;
      case "check":
        return <MdCheck {...iconProps} />;
      case "x":
        return <MdClose {...iconProps} />;
      case "dollar":
        return <MdAttachMoney {...iconProps} />;
      case "filter":
        return <MdFilterList {...iconProps} />;
      case "filter-on":
        return <MdFilterAlt {...iconProps} />;
      case "filter-off":
        return <MdFilterAltOff {...iconProps} />;
      case "import-csv":
        return <MdUpload {...iconProps} />;
      case "download":
        return <MdDownload {...iconProps} />;
      default:
        return null;
    }
  };

  const getButtonClasses = () => {
    const baseClasses = 'inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 text-sm';
    const widthClass = fullWidth ? 'w-full' : '';
    
    const buttonColors = (disabled || isLoading) 
      ? 'bg-gray-100 text-gray-400 cursor-not-allowed hover:bg-gray-100'
      : {
          primary: 'bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-200',
          secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-2 focus:ring-gray-200'
        }[color || 'primary'];

    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      lg: 'px-5 py-3 text-base'
    }[size || 'sm'];

    return `${baseClasses} ${widthClass} ${buttonColors} ${sizeClasses} ${className || ''}`.trim();
  };

  return (
    <button
      className={getButtonClasses()}
      onClick={onClick}
      type={type || "button"}
      disabled={disabled || isLoading}
      style={style}
    >
      {isLoading ? (
        <div className="flex items-center justify-center gap-2">
          <MdSync className="animate-spin h-5 w-5" />
          <span>Loading...</span>
        </div>
      ) : (
        <>
          {renderIcon() && <span className="h-5 w-5">{renderIcon()}</span>}
          {label}
        </>
      )}
    </button>
  );
};


export default BaseButton;