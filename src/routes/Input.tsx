import { Section } from "../components/site/Section"
import { Container } from "../components/site/Container"
import { Input } from "../components/library/Input"

export const InputPage = () => {
    return (
        <Container
            title="Inputs"
            description="An input is a widget that allows users to provide data or specify options, which can be submitted as part of a form or used to interact with and manipulate content on a web page."
        >


            <Section
                title="Basic"
                description="Basic input with a placeholder."
            >
                {/* Basic Input */}

                <Input type="text" placeholder="Type things here."></Input>

                {/* Basic Disabled Input */}
                <Input disabled type="text" placeholder="Disabled"></Input>

            </Section>


            <Section
                title="Label"
                description="Input with a label."
            >

                {/* Label Input */}
                <Input type="email" label="Email" placeholder="you@site.com"></Input>
            </Section>
            <Section
                title="Description"
                description="Input with a description."
            >
                {/* Description Input */}
                <Input type="password" label="Password" description="We'll never share your details." placeholder="Secret!"></Input>


            </Section>


        </Container>
    )
}
