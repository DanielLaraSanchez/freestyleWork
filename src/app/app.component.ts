import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { users } from './data/users';
import { pairs } from './data/pairs';
import { Pair } from './models/pair';
import { User } from './models/user';

interface Message {
  user: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  onlineUsers: User[] = users;
  pairs: Pair[] = pairs;

  messages: Message[] = [];
  newMessage: string = '';
  gridCols: number | undefined;

  constructor(private breakpointObserver: BreakpointObserver) {}

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