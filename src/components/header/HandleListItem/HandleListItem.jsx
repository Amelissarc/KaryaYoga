import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


export default function FolderList() {
return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem>
        <ListItemAvatar>
            <Avatar>
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Card title " secondary="(1) Units" />
        </ListItem>
        <ListItem>
        <ListItemAvatar>
            <Avatar>
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Card title " secondary="(2) Units" />
        </ListItem>
        <ListItem>
        <ListItemAvatar>
            <Avatar>
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Card title " secondary="(1) Units" />
        </ListItem>
    </List>
);
}

