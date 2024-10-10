import { Container } from "react-bootstrap"


const Map: React.FC = () => {

  return (
    <Container>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.7084275566763!2d76.91205331087994!3d22.590005979393727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397d1729c4f49d17%3A0x6f3b78743712577c!2sGanesh%20Mandir%2C%20Narmada%20Colony!5e0!3m2!1sen!2sin!4v1728552618267!5m2!1sen!2sin" style={{width:"100%", height:"400px"}} className="my-5" loading="lazy"></iframe>

    </Container>

  );
}

export default Map;
