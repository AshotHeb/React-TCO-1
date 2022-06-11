import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import { BACKEND_URL } from "../../consts";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
    const navigate = useNavigate()

    const [inputsData, setInputsData] = useState({
        name: {
            value: "",
            error: undefined,
        },
        surname: {
            value: "",
            error: undefined,
        },
        email: {
            value: "",
            error: undefined,
        },
        password: {
            value: "",
            error: undefined,
        },
        confirmPassword: {
            value: "",
            error: undefined,
        },
    });

    const onRegistrationSubmit = (e) => {
        e.preventDefault()
        const {
            name: { value: name },
            surname: { value: surname },
            email: { value: email },
            password: { value: password },
            confirmPassword: { value: confirmPassword },
        } = inputsData;


        const formData = {
            name,
            surname,
            email,
            password,
            confirmPassword
        }

        fetch(`${BACKEND_URL}/user`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(() => {
                navigate('/login')
            })
    }

    const handleChange = (e) => {
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

    return (
        <Form onSubmit={onRegistrationSubmit}>
            <FormGroup>
                <Label for="nameId">
                    Name
                </Label>
                <Input id="nameId" name="name" onChange={handleChange} />
            </FormGroup>

            <FormGroup>
                <Label for="surnameId">
                    Surname
                </Label>
                <Input id="surnameId" name="surname" onChange={handleChange} />
            </FormGroup>

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
                <Input id="passwordId" name="password" onChange={handleChange} />
            </FormGroup>

            <FormGroup>
                <Label for="confirmId">
                    Confirm Password
                </Label>
                <Input id="confirmId" name="confirmPassword" onChange={handleChange} />
            </FormGroup>

            <Button>Register</Button>
        </Form>

    )
}