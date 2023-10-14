import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Managment: React.FC = () => (
<div>
<h1>
Session Management
</h1>
  <div style={{display: "flex", justifyContent: "center",width:"90%", marginRight:"auto",marginLeft:"auto", borderRadius: '4%'}}>
    <div >
      <Card sx={{ maxWidth: 500, margin: 5}}>
        <CardMedia
            sx={{ height: 500, width: 500, borderRadius: '4%'}} 
            image={require("../images/dash.png")}
          title="Current Image"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center" style={{backgroundColor:"#D9D9D9",borderRadius: '10%'}}>
            Latest Image
          </Typography>
          <Typography gutterBottom variant="h5" component="div" align="center" style={{backgroundColor:"#D9D9D9",borderRadius: '10%'}}>
            Session Name
          </Typography>
        </CardContent>
      </Card>
    </div>
    <div style={{ marginLeft: 20, display: "flex", flexDirection: "column" }}>
      <Button variant="contained" color="primary" style={{ width:"30%", color:"black", marginBottom: 10, marginTop: "10%", marginRight:"auto", marginLeft:"auto", backgroundColor: "#D9D9D9"} }>
        CONFIGURE SESSION NAME
      </Button>
      <Button variant="contained" color="primary" style={{width:"30%", color:"black", marginBottom:"5%", marginRight:"auto", marginLeft:"auto", marginTop: "2%", backgroundColor: "#D9D9D9"}}>
        DISPLAY SESSION LOG
      </Button>
      <div style={{backgroundColor:"#D9D9D9", marginRight:"10%", marginBottom:"5%", width:"95%", borderRadius: '3%'}}>
        <h3 style={{margin:"3%"}}>SESSION LOGS:</h3>
      <Typography variant="body1" style={{margin:"3%"}}>
      The Session Management Page is an essential component of our precision agriculture application, designed meticulously to enhance user interaction with their NDVI analysis sessions. At the forefront of this page's capabilities is the "Configure Session Name" feature. This functionality allows users to bestow unique identifiers or descriptive names to each session, ensuring that they can quickly pinpoint specific datasets amidst a plethora of captures. Such customization becomes invaluable, especially when managing an extensive archive of NDVI analyses, facilitating seamless categorization and streamlined retrieval.
<br />
<br />
The incorporation of the "Display Session Logs" extends the dtepth of insights available to users. Rather than simply presenting static data, this feature offers a dynamic record that chronicles every event, modification, and observation tied to a session. From minor adjustments to significant anomalies, users are granted a comprehensive overview, ensuring that no detail escapes. This empowers our users to make data-driven decisions, drawing from both current insights and historical contexts.
<br />
<br />
In essence, the Session Management Page serves as both a compass and a ledger, guiding users through their precision agriculture journey while meticulously documenting each step.
      </Typography>
      </div>
    </div>
  </div>
  </div>
);

export default Managment;
