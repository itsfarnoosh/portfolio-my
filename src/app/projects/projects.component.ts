import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Guitar Hero Game',
      description:
        'Developed a dynamic Guitar Hero-inspired game using TypeScript and RxJS, showcasing real-time reactive programming principles. The game features smooth animations and interactive gameplay, leveraging functional reactive programming for a seamless experience.',
      tools: ['HTML', 'CSS', 'TypeScript'],
      caseStudyUrl: 'https://github.com/itsfarnoosh/Guitar-hero-game-',
    },
    {
      name: 'Wordle Game',
      description: 'Created a Wordle-inspired game using Haskell, HTML, and TypeScript, combining functional and interactive programming techniques. The game offers an engaging word-guessing experience with dynamic visuals and smooth gameplay.',
      tools: ['Haskell', 'HTML', 'TypeScript'],
      caseStudyUrl: 'https://github.com/itsfarnoosh/Wordle-Game://example.com/project-2-case-study',
    },
    {
      name: 'Static Factory Game',
      description: 'Static Factory is a text-based "rogue-like" game programmed in Java, inspired by the popular game *Lethal Company*. In this game, players navigate through a mysterious factory filled with challenges, hazards, and unpredictable encounters, using strategic decisions to survive and progress.',
      tools: ['Java'],
      caseStudyUrl: 'https://github.com/itsfarnoosh/Static-Factory-Game',
    },
    {
      name: 'Package Delievery Website',
      description: 'Manages the allocation of products to drivers. The app is requested to be a web application that all devices with web browsing capability can access.',
      tools: ['CSS', 'HTML', 'TypeScript','Angular CLI'],
      caseStudyUrl: 'https://github.com/itsfarnoosh/Package-delivery-website',
    },
    {
      name: 'AI Viruses',
      description: 'Designed a Python-based tool to model computer networks and visualize the longest routes suitable for a specific virus spread. Includes a dynamic route organiser to rank and track the relative effectiveness of different routes.',
      tools: ['Python'],
      caseStudyUrl: 'https://github.com/itsfarnoosh/AI-Viruses',
    }
  ];
}
