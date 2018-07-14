# Wildrook Test

## Usage

`npm install` Install all required packages relevant to the project. Run this before any other command.

`ng serve` Run the local dev server at `http://localhost:4200`.

`ng build` Build the project. Build artifacts will be stored in `dist/`. Use `--prod` flag for production build.

`ng test` Don't run this unless you like errors all over the console.

`ng e2e` Don't run this either. The scope of this project is not even close for a need to implement this.

## Technology Stack

Due to the monolithic nature of Angular and the scope of the project, there was not much of a need for many packages
to be installed. Below is an account of the installed technologies aside from Angular 6.

For styling, Angular was initialized with `--style less` for a CSS pre-processer. Sass could of been 
used just as easily. CSS normalization and mixins were added as drop-ins, `/src/normalize.css` and `/src/elements.less`
respectively. There are more robust solutions to styling, such as Sass/Compass, Less/Lesshat or Bootstrap, but none
were needed to implement the design. Additionally, Less has depreciated inline JavaScript due to security concerns and
is currently incompatible with Angular CLI since there is no configuration option for Less compilation. Continued
reading below.

https://stackoverflow.com/questions/46729091/enable-inline-javascript-in-less

http://lesscss.org/features/#plugin-atrules-feature

The scrolling animation is handled by a great Angular plugin by Nicky Lenaers. Very simple and concise configuration.

https://github.com/nicky-lenaers/ngx-scroll-to

The font Gothic A1 is hosted on Google Fonts. There were some load issues at times during development.

https://fonts.google.com/specimen/Gothic+A1

## Project Intention

Based on the output of the supplied endpoint, data was organized by prioritizing severity over all other data points.
Both technical and business users alike can appreciate putting out the hottest fire first. This project intends to 
inform decisions around open issues easier for all parties involved by displaying data in a clean, simple and digestible 
manner, making the important information accessible without much need for prerequisite knowledge on the specifics of 
the issue itself.

The header navigation features an always-up summary view of Security Control Recommendations (SCR). The aggregate number
of total SCR is included in the main page heading. The navigation is a color-coded horizontal composite graph 
breaking down of all recommendations by severity. Clicking on the severity graph blocks takes the user to the severity 
item group with a quick scrolling animation. Each severity item group has a sub heading calling out the number of 
SCR for that severity item group.

Inside of each SCR item are the other data points organized in two sections. The top portion displays the category and 
description in plain language. More technical information is bifurcated below a line and displayed as a monospace code 
block of formatted key value pairs for power users. On the screen left of each SCR item, a heavy border denotes the 
severity of the item. The severity level is also enforced textually on the screen right as a low key badge that doesn't
intend to take away from the main focus of the SCR item.

Responsive design is part of the design itself as the design is a single column which lends itself out well to 
responsiveness. This approach may not scale in a full application, but it is enough for a POC scope.

Color plays an important part in the process of clear communication. Color was used denote SCR severity as a first class
member of the design. This color scheme intends to decouple those severity colors from the interface itself. With that
in mind, a range of dark blue grays were used to starkly contrast the severity colors, all of which fall on the warm 
side of the color wheel. The cooler colors of the interface intend to inspire a sense of calm and control.

The font Gothic A1 is sans-serif font which was somewhat inspired by DIN Next, the Wildrook landing page font. Both are
compressed, san-serif and modern. Gothic A1 is free to use and a reasonable substitution for DIN Next.

## Level of Effort

In terms of LOE, this project output is what I would consider a comfortable work week. Some days were lighter than 
others, the largest blockers being setting up the framework and ramping up on new Angular 2+ concepts. Coming from an 
Angular 1.4 background, a lot of concepts (DI, directives, pipes, bindings, etc) were easy to pickup. TypeScript was 
also intuitive, since my first programming language was ECMA-based Flash ActionScript. ActionScript is strongly typed 
out-of-the-box, so TypeScript syntax was a breeze to grok.

Monday was the most challenging, setting up the framework specifics and ramping up on Angular 6. Tuesday was a late 
day, maybe 10 hours, but things were coming together and I didn't mind taking the time. Wednesday and Thursday was 
mostly CSS and getting the site designed. That is never very difficult for me. It is what I find most enjoyable to do. 
My intention is to have Friday as a light day, in terms of workflow. I like to save easier stuff like documentation 
after the code has settled in for the week.

Spikes came up when dealing with consuming the endpoint and using Observables. I see the benefit to the switch to 
Observables and I'm excited to work with them more for involved applications, but it took a bit to understand it. I 
also got hung up on Angular generators. I couldn't figure out an error I was getting when using a component. It turned 
out that Angular appended `app-` to the component name for name spacing purposes. I see the reasoning for it now and I 
won't get hung up on that again.

## Next Steps

If this design was to be scaled out to a full application, filtering at a global and at a SCR item group level would be
the next logical step. Followed by collapsible stack trace drill downs for power users. In terms of design, I would do
more font exploration as well as revisit the logo and logotype options.

