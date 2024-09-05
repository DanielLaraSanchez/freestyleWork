import { Component, ElementRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

interface User {
  id: number;
  name: string;
  profilePicture: string;
  points: number;
}

interface Message {
  user: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onlineUsers: User[] = [
    { id: 1, name: 'MC Hammer', profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg', points: 100 },
    { id: 2, name: 'Eminem', profilePicture: 'https://randomuser.me/api/portraits/men/2.jpg', points: 200 },
    { id: 3, name: 'Jay-Z', profilePicture: 'https://randomuser.me/api/portraits/men/3.jpg', points: 300 },
    { id: 4, name: 'Kendrick Lamar', profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg', points: 150 },
    { id: 5, name: 'Lil Wayne', profilePicture: 'https://randomuser.me/api/portraits/men/5.jpg', points: 250 },
    { id: 6, name: 'Drake', profilePicture: 'https://randomuser.me/api/portraits/men/6.jpg', points: 350 },
    { id: 7, name: 'Snoop Dogg', profilePicture: 'https://randomuser.me/api/portraits/men/7.jpg', points: 400 },
    { id: 8, name: 'Tupac Shakur', profilePicture: 'https://randomuser.me/api/portraits/men/8.jpg', points: 450 },
    { id: 9, name: 'Notorious B.I.G.', profilePicture: 'https://randomuser.me/api/portraits/men/9.jpg', points: 500 },
    { id: 10, name: 'Nas', profilePicture: 'https://randomuser.me/api/portraits/men/10.jpg', points: 175 },
    { id: 11, name: 'J. Cole', profilePicture: 'https://randomuser.me/api/portraits/men/11.jpg', points: 275 },
    { id: 12, name: 'Chance the Rapper', profilePicture: 'https://randomuser.me/api/portraits/men/12.jpg', points: 325 },
    { id: 13, name: 'Travis Scott', profilePicture: 'https://randomuser.me/api/portraits/men/13.jpg', points: 375 },
    { id: 14, name: 'Tyler, The Creator', profilePicture: 'https://randomuser.me/api/portraits/men/14.jpg', points: 425 },
    { id: 15, name: 'Post Malone', profilePicture: 'https://randomuser.me/api/portraits/men/15.jpg', points: 475 },
    { id: 1, name: 'MC Hammer', profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg', points: 100 },
    { id: 2, name: 'Eminem', profilePicture: 'https://randomuser.me/api/portraits/men/2.jpg', points: 200 },
    { id: 3, name: 'Jay-Z', profilePicture: 'https://randomuser.me/api/portraits/men/3.jpg', points: 300 },
    { id: 4, name: 'Kendrick Lamar', profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg', points: 150 },
    { id: 5, name: 'Lil Wayne', profilePicture: 'https://randomuser.me/api/portraits/men/5.jpg', points: 250 },
    { id: 6, name: 'Drake', profilePicture: 'https://randomuser.me/api/portraits/men/6.jpg', points: 350 },
    { id: 7, name: 'Snoop Dogg', profilePicture: 'https://randomuser.me/api/portraits/men/7.jpg', points: 400 },
    { id: 8, name: 'Tupac Shakur', profilePicture: 'https://randomuser.me/api/portraits/men/8.jpg', points: 450 },
    { id: 9, name: 'Notorious B.I.G.', profilePicture: 'https://randomuser.me/api/portraits/men/9.jpg', points: 500 },
    { id: 10, name: 'Nas', profilePicture: 'https://randomuser.me/api/portraits/men/10.jpg', points: 175 },
    { id: 11, name: 'J. Cole', profilePicture: 'https://randomuser.me/api/portraits/men/11.jpg', points: 275 },
    { id: 12, name: 'Chance the Rapper', profilePicture: 'https://randomuser.me/api/portraits/men/12.jpg', points: 325 },
    { id: 13, name: 'Travis Scott', profilePicture: 'https://randomuser.me/api/portraits/men/13.jpg', points: 375 },
    { id: 14, name: 'Tyler, The Creator', profilePicture: 'https://randomuser.me/api/portraits/men/14.jpg', points: 425 },
    { id: 15, name: 'Post Malone', profilePicture: 'https://randomuser.me/api/portraits/men/15.jpg', points: 475 }
  ];

  messages: Message[] = [];
  newMessage: string = '';
  gridCols: number | undefined;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.matches) {
        if (this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
          this.gridCols = 2;
        } else if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
          this.gridCols = 3;
        } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
          this.gridCols = 4;
        } else if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
          this.gridCols = 5;
        } else if (this.breakpointObserver.isMatched(Breakpoints.XLarge)) {
          this.gridCols = 6;
        }
      }
    });
  }

  sendMessage() {
    if (this.newMessage.trim().length > 0) {
      this.messages.push({
        user: 'You',
        text: this.newMessage.trim()
      });
      this.newMessage = '';
      // Scroll to bottom after adding message
      setTimeout(() => {
        const chatWindow = document.querySelector('.chat-window');
        if (chatWindow) {
          chatWindow.scrollTop = chatWindow.scrollHeight;
        }
      }, 100);
    }
  }
}