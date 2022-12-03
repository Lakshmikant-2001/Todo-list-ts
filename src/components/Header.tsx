import { constants } from "../constants";

export default function Header() {
  const HeaderConstants = constants.Header;
  return (
    <header className="bg-primary text-white py-2">
      <h4 className="mb-0 text-uppercase text-center">
        {HeaderConstants.AppTitle}
      </h4>
    </header>
  );
}
