
import styles from "@/styles/Home.module.css";
import LoginForm from "../../components/LoginForm";
import IndexTopBar from "../../components/IndexTopBar";

export default function Home() {
  return (
    <div className="h-100 d-flex">
      <IndexTopBar/>
      <div className="position-absolute end-0 h-100 d-flex flex-column align-items-center justify-content-center p-3 w-25 bg-dark">
        <h3 className="text-light">Login</h3>
        <LoginForm/>
      </div>
    </div>
  );
}
