import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface Alerttypes {
  message: string;
  open: boolean;
  deleteBranches: any;
  title?: string;
}

export default function AlertDialog(props: Alerttypes) {
  const { message, open, deleteBranches, title } = props;

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="PPMori">
          {title ? title : "Delete Confirmation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className="PPMori">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            className="bg-gray-400 px-3 py-1 rounded-md text-white normal-case"
            onClick={() => deleteBranches(false)}
          >
            No
          </button>
          <button
            className="bg-red-600 px-3 py-1 rounded-md text-white normal-case"
            onClick={() => deleteBranches(true)}
          >
            Yes
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
