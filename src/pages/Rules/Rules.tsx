import {
  Container,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

const Rules = () => {
  return (
    <Container maxWidth="md" sx={{ p: 3, mt: 3 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Forum Rules
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="1. Respectful Communication"
              secondary="Be polite and respectful to all members. Avoid offensive language, personal attacks, or harassment."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="2. Stay On-Topic"
              secondary="Keep discussions focused on rhythm games and related topics. Off-topic posts may be removed to maintain relevance."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="3. No Spamming"
              secondary="Avoid excessive posting of repetitive content, advertisements, or irrelevant links. Spamming will result in warnings or account suspension."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="4. Content Quality"
              secondary="Ensure that your posts contribute meaningfully to discussions. Avoid low-effort or one-word responses."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="5. No NSFW Content"
              secondary="Do not share or discuss explicit, adult, or inappropriate content. This includes images, links, or any form of media."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="6. Copyright and Piracy"
              secondary="Do not share or request illegal downloads, cracks, or pirated versions of games or music. Respect copyright laws."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="7. Moderation Decisions"
              secondary="Accept and abide by the decisions of the moderators. If you disagree, address concerns privately and professionally."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="8. Spoiler Policy"
              secondary="Clearly mark and warn about spoilers. Use spoiler tags when discussing plot details, game outcomes, or any information that could spoil the experience for others."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="9. User Safety"
              secondary="Protect your personal information and exercise caution when sharing details online. Report any suspicious behavior to the moderation team."
            />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
};

export default Rules;
