import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

class ListNotes extends Component {
	render() {
		const { notes, changeCurrentNote, deletenote } = this.props;
		return (
			<ul className="list-notes">
				{notes.map((note) => (
					<div className="list-item-top" key={note.id}>
						<li className="list-item" onClick={() => changeCurrentNote(note)}>
							{note.title}
              <IconButton  variant="contained" color="primary" >
              <VisibilityIcon/>
						</IconButton>
              <IconButton  variant="contained" color="primary"  onClick={() => deletenote(note)}>
              <DeleteIcon/>
						</IconButton>
						</li>
					
					</div>
				))}
			</ul>
		);
	}
}

export default ListNotes;
