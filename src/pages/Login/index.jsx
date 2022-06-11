import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import { BACKEND_URL } from "../../consts";

export const Login = () => {
    const [inputsData, setInputsData] = useState({
        title: {
            value: "",
            error: undefined,
        },
        description: {
            value: "",
            error: undefined,
        },
    });

    const handleChange = (e) => {
        e.preventDefault();

        const { value, name } = e.target;

        setInputsData((prev) => {
            return {
                ...prev,
                [name]: {
                    ...prev[name],
                    value,
                },
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const {
            email: { value: email },
            password: { value: password },
        } = inputsData;

        const formData = {
            email,
            password,
        };


        fetch(`${BACKEND_URL}/user/sign-in`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then((data) => {
                if (data.errors || data.error) {
                    throw new Error('Error')
                }
                const { jwt, refreshToken } = data;
                localStorage.setItem('token', JSON.stringify(jwt))
                localStorage.setItem('refreshToken', JSON.stringify(refreshToken))

            })
            .catch((error) => {
                console.log("🚀 ~ error", error)

            })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="emailId">
                    Email
                </Label>
                <Input id="emailId" name="email" onChange={handleChange} />
            </FormGroup>

            <FormGroup>
                <Label for="passwordId">
                    Password
                </Label>
                <Input id="passwordId" name="password" onChange={handleChange} type={"password"} />
            </FormGroup>
            <Button>
                Login
            </Button>
        </Form>
    )
}