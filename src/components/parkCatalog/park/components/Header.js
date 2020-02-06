import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Image} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));
export default function Header(props) {
    const classes = useStyles();
    const { sections, title } = props;

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <Image src = "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg" />
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    {title}
                </Typography>
                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                    {sections.map(section => (
                        <Link
                            color="inherit"
                            noWrap
                            key={section.title}
                            variant="body2"
                            href={section.url}
                            className={classes.toolbarLink}
                        >
                            {section.title}
                        </Link>
                    ))}
                </Toolbar>
            </Toolbar>

        </React.Fragment>
    );
}