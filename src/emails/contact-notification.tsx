import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text
} from "@react-email/components";

type ContactNotificationProps = {
  name: string;
  email: string;
  message: string;
};

export function ContactNotification({
  name,
  email,
  message
}: ContactNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>New Healing Ground Geneva enquiry from {name}</Preview>
      <Body style={{ backgroundColor: "#f6f0e7", fontFamily: "Arial, sans-serif" }}>
        <Container
          style={{
            backgroundColor: "#fffaf2",
            borderRadius: 16,
            margin: "32px auto",
            padding: 32
          }}
        >
          <Heading style={{ color: "#223029" }}>New website enquiry</Heading>
          <Section>
            <Text>
              <strong>Name:</strong> {name}
            </Text>
            <Text>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={{ whiteSpace: "pre-wrap" }}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
