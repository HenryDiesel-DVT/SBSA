import React, { Component } from 'react';
import Note from './Note';
import ListNotes from './ListNotes';
import './App.css';
import Button from '@material-ui/core/Button';

const notesArray = [{ id: 1, title: 'Example Note', content: 'This is the note content' }];

class App extends Component {
	state = {
		currentNote: null,
		notes: notesArray,
	};
	count = 0;

	changeCurrentNote = (note) => {
		this.setState({ currentNote: note });
	};

	deletenote = (note) => {
		this.deleteApi(note);
		this.setState((state) => ({ notes: state.notes.filter((noteIterator) => noteIterator.id !== note.id) }));
		this.setState({ currentNote: null });
	};

	saveNote = (note) => {
		this.setState((state) => {
			state.notes.concat([note]);
		});
		this.setState({ currentNote: note });
	};

	addNew = () => {
		const note = { id: this.count++, title: 'Untitled', content: 'Placeholder text for note...' };
		this.setState((state) => ({ notes: state.notes.concat([note]) }));
		this.setState({ currentNote: note });
		this.saveApi(note);
	};

	getApi = () => {
		var notes = [];
		console.log('GETAPI');
		fetch('http://localhost:4000/notes', {
			method: 'GET',
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				this.setState({ notes: data.notes });
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	updateApi = () => {
    alert('Note Saved');
		var note = this.state.currentNote; //{ id: 1, title: 'post1', content: 'this is the first text' };
		console.log('UPDATEAPI');
		console.log(note);
		fetch('http://localhost:4000/note', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(note),
		})
			.then((res) => console.log(res))
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	saveApi = (note) => {
		//var note = this.state.currentNote;//{ id: 1, title: 'post1', content: 'this is the first text' };
		console.log('SAVEAPI');
		console.log(note);
		fetch('http://localhost:4000/note', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(note),
		})
			.then((res) => console.log(res))
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	deleteApi = (note) => {
		console.log('DELETEAPI');
		console.log(note);
		fetch('http://localhost:4000/note', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(note),
		})
			.then((res) => console.log(res))
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	render() {
		this.state.notes.sort((a, b) => {
			return b.id - a.id;
		});
		return (
			<div className="App">
				<h1 style={{ color: 'white', backgroundColor: 'CornflowerBlue' }}>CRUD DEMO</h1>
				<div style={{ textAlign: 'left' }}>
					<Button variant="contained" color="primary" onClick={this.getApi}>
						Get Saved Notes
					</Button>
          <span> OR </span>
					<Button variant="contained" color="primary" onClick={this.addNew}>
						Add New Note
					</Button>
				</div>
				<div className="notes-wrapper">
					<div className="list-notes-top">
						<ListNotes notes={this.state.notes} changeCurrentNote={this.changeCurrentNote} deletenote={this.deletenote} />
					</div>
					<div className="current-note">{this.state.currentNote !== null && <Note note={this.state.currentNote} savenote={this.saveNote} updateApi={this.updateApi} />}</div>
				</div>
			</div>
		);
	}
}

export default App;
