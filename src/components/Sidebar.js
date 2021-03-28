import React from 'react'
import styled from 'styled-components'
import CreateIcon from '@material-ui/icons/Create';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { useCollection } from 'react-firebase-hooks/firestore'
import { auth, db } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
function Sidebar() {
    const [channels, loading, error] = useCollection(db.collection('rooms'))
    const [user] = useAuthState(auth)
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>PAPA FARM HQ</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Show more" />
            <hr />
            <SidebarOption Icon={AddIcon} title="Add Channel" addChannelOption />

            {channels?.docs.map(doc => (
                <SidebarOption title={doc.data().name} key={doc.id} id={doc.id} />

            ))}




        </SidebarContainer>
    )
}

export default Sidebar
const SidebarContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    flex: 0.3;
    margin-top: 60px;
    border-top: 1px solid #49274b;

    max-width: 260px;

    >hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`
const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root{
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`

const SidebarInfo = styled.div`
    flex: 1;

    >h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    >h3 {
        font-size: 13px;
        display: flex;
        font-weight: 400;
        align-items:center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`