import MainPage from "../components/dumb/MainPage";

import React from "react";
import RegisterForm from "../components/smart/RegisterForm";
import Link from "next/link";
import Layout from "../components/layout";
import { FormContainer } from "./index";
const register = () => {
    return (
        <Layout title="Register to our service">
            <FormContainer>
                <header>
                    <h1>Nie masz konta?</h1>

                    <h4>użyj formularza pod spodem!</h4>
                </header>
                <RegisterForm />
                <p className="p">
                    Masz już konto?
                    <Link href="/">
                        <a>Zaloguj się</a>
                    </Link>
                </p>
            </FormContainer>
        </Layout>
    );
};

export default register;
