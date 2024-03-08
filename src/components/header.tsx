import { ThemeToggle } from "./theme-toggle";







export default function Header() {
  return (
    <div className="container flex flex-row items-center justify-between mt-4">
      <h1 className="font-bold text-lg text-gray-50 ">MyStudies</h1>

      <ThemeToggle />
    </div>
  )
}
