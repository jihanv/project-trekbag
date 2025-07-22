import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ total, packed }) {
  return (
    <header>
      <Logo />
      <Counter total={total} packed={packed} />
    </header>
  );
}
