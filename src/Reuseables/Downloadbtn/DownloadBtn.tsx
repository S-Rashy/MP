import "./DownloadBtn.css"
interface DownloadBtnProps {
    icon: string;
    textUp: string;
    textDown: string;
  }
  
  const DownloadBtn: React.FC<DownloadBtnProps> = ({ icon, textUp, textDown }) => {
    return (
      <div className="download">
        <img src={icon} alt="Download icon" />
        <div className="downloadText">
          <p>{textUp}</p>
          <h5>{textDown}</h5>
        </div>
      </div>
    );
  };
  
  export default DownloadBtn;
  