import { CONSTANTS } from "../constants";

export default function Header() {
  const constants = CONSTANTS.Header;
  return (
    <header className="bg-primary text-white py-2">
      <h4 className="mb-0 text-uppercase text-center">
        {constants.AppTitle}
      </h4>
    </header>
  );
}
