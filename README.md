<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <img src="https://user-images.githubusercontent.com/16857803/181211283-a2aee001-8d04-464b-882b-17d666e12d4e.jpeg" alt="Logo" width="100" style="border-radius:50%" />

  <h3 align="center">Github Search Engine</h3>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<div align="center">
  <img width="700" alt="image" src="https://user-images.githubusercontent.com/16857803/181210608-cac10e61-7b68-4bc7-a5fa-5ea2832d732c.png">
</div>

This is an application that helps you search Github API by query and conditions(Users or Organizations). THe application provides the following features.

Feature List:
* A form for searching, with a text input.
* Voice search capturing.
* A set of radio inputs for switching between searching for organizations or users.
* When the form is submitted, a view of that search term's results, each result listing displays some basic information about the result (e.g., name, avatar and links).
* End-to-end regression testing with Cypress

UI state that shows when the API request is in progress(Spinners), when there are no results found and error capturing with ErrorBoundary HOC.


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

The following are libraries used in creating magic!

* [![React][React.js]][React-url]
* [Styled Components](https://styled-components.com/)
* [Animate CSS](https://animate.style/)
* [Cypress](https://cypress.io)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone git@github.com:despeauxz/assemblyhq.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a `.env` file and add this line to it so it runs on PORT 8080
   ```js
   PORT=8080
   ```
4. Run command `npm run start` and you should get redirected to `http://localhost:8080`
5. Enjoy!

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Search Github by input
- [x] Voice search with native SpeechRecognition
- [x] Minimalistic design to show data like avatar and name
- [x] Loaders and Page Loaders
- [x] URL Formatting
- [x] Image Skeleton
- [x] Testing


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
