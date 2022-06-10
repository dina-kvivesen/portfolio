import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';

const Footer = (props) => {
  return (
    <div className="text-center mx-auto w-full">
      <Link href="https://github.com/dina-kvivesen">
        <a>
        <FontAwesomeIcon
          className="h-4 mr-5" icon={['fab', 'github-alt']} 
          style={{ fontSize: 30 }}
        />
      </a>
      </Link>
      <Link href="https://www.linkedin.com/in/dina-kvivesen-7ab5141b4/">
        <a>
        <FontAwesomeIcon
          className="h-4 ml-5" icon={['fab', 'linkedin']}
          style={{ fontSize: 30 }}
        />
        </a>
      </Link>
    </div>
  );
};

export default Footer;