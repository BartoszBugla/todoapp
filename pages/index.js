import React from "react";
import LoginForm from "../components/smart/LoginForm";
import Link from "next/link";
import { SignUpFacebook, SignUpGoogle } from "../components/dumb/SignUpVia";
import { Auth } from "../customHooks/authMiddleware";
import Layout from "../components/layout";
import styled from "styled-components";
export const FormContainer = styled.div`
    height: 800px;
    border-radius: 10px;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    margin: 50px auto;
    font-family: "Jost";
    border: 0.5px solid #bbbbbb;
    header {
        color: black;
        margin: 20px;
        text-align: center;
        font-size: 1.2rem;
    }
    .p {
        margin-top: 10px;
        color: black;
        a {
            margin-left: 5px;
        }
        a:link,
        a:visited {
            color: grey;
        }
        a:hover,
        a:active {
            color: black;
            text-shadow: 0 0 4px rgba(20, 20, 20, 0.2);
        }
    }
`;
const Connections = styled.div`
    width: 100%;
    height: auto;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Page = () => {
    return (
        <Layout title="Welcome!">
            <FormContainer>
                <header>
                    <h1>Witaj!</h1>

                    <h4>Aby rozpocząć zaloguj się na swoje konto!</h4>
                </header>
                <LoginForm />
                <p className="p">
                    Nie masz konta?
                    <Link href="/register">
                        <a>ZAREJESTRUJ SIĘ!</a>
                    </Link>
                </p>
                <p className="p">
                    <Link href="/recoverpassword">
                        <a>Nie pamiętasz hasła?</a>
                    </Link>
                </p>
                <Connections>
                    <SignUpGoogle />
                    <SignUpFacebook />
                </Connections>
            </FormContainer>
        </Layout>
    );
};

export default Page;
