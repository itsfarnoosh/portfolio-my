import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isScrolled = false;
  isHidden = false; // For hiding the header on scroll down
  lastScrollY = 0;

  // Listen for window scroll events
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > this.lastScrollY && currentScrollY > 50) {
      // Scrolling down: hide the header
      this.isHidden = true;
    } else {
      // Scrolling up: show the header
      this.isHidden = false;
    }

    this.lastScrollY = currentScrollY;
  }

  // Show header when mouse moves to the top
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (event.clientY < 50) {
      this.isHidden = false;
    }
  }

  // Dark mode toggle logic
  isDarkMode: boolean = false;
  themeText: string = 'Switch to Night Mode';

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;

    // Toggle the dark mode class on the body
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      this.themeText = 'Switch to Day Mode';
    } else {
      document.body.classList.remove('dark-mode');
      this.themeText = 'Switch to Night Mode';
    }
  }
}
