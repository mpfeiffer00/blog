





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-1c2c316b7a17f15536c6a26ed744654fc228a24658a7ae395cdcbf8329c8406b.css" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-8100b9bf1eb6ed8b38eaad2fe7ba51d1895aa0602aafe4a87068d444e07e8c5c.css" media="all" rel="stylesheet" />
  
  
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-44b6bba3881278f33c221b6526379b55fbd098af3e553f54e81cab4c9a517c8e.css" media="all" rel="stylesheet" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>local_time/local-time.js at master · basecamp/local_time · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars1.githubusercontent.com/u/13131?s=400&amp;v=4" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="basecamp/local_time" property="og:title" /><meta content="https://github.com/basecamp/local_time" property="og:url" /><meta content="local_time - Rails engine for cache-friendly, client-side local time" property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="E7BB:7F65:87FF768:DC934D1:5A4A4C29" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="E7BB:7F65:87FF768:DC934D1:5A4A4C29" name="octolytics-dimension-request_id" /><meta content="iad" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="NmZiZDE0MGJkNzVkYjQyMmFjOGE1ZDNiYzZiMzJkMzZlZmQ3ZTkzZDk1ZTUwYzU0MzVlYTM4MDcwMTY0NDVkM3x7InJlbW90ZV9hZGRyZXNzIjoiNjUuMjYuOTEuNyIsInJlcXVlc3RfaWQiOiJFN0JCOjdGNjU6ODdGRjc2ODpEQzkzNEQxOjVBNEE0QzI5IiwidGltZXN0YW1wIjoxNTE0ODE4NjAyLCJob3N0IjoiZ2l0aHViLmNvbSJ9">


  <meta name="html-safe-nonce" content="2d7d7cc5bf8f9cb928630791753b9561a3916f93">

  <meta http-equiv="x-pjax-version" content="e6dbf537b2eb3990c0cae54500f32daf">
  

      <link href="https://github.com/basecamp/local_time/commits/master.atom" rel="alternate" title="Recent Commits to local_time:master" type="application/atom+xml">

  <meta name="description" content="local_time - Rails engine for cache-friendly, client-side local time">
  <meta name="go-import" content="github.com/basecamp/local_time git https://github.com/basecamp/local_time.git">

  <meta content="13131" name="octolytics-dimension-user_id" /><meta content="basecamp" name="octolytics-dimension-user_login" /><meta content="14475276" name="octolytics-dimension-repository_id" /><meta content="basecamp/local_time" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="14475276" name="octolytics-dimension-repository_network_root_id" /><meta content="basecamp/local_time" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/basecamp/local_time/blob/master/app/assets/javascripts/local-time.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  </head>

  <body class="logged-out env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    
        <div class="py-2 px-3 f5 text-white bg-red rounded-0">
    <div class="d-flex flex-justify-between flex-items-center mx-auto" style="max-width: 980px;">
      <div>
        <strong>The vote is over, but the fight for net neutrality isn’t.</strong>
        <span class="d-none d-sm-inline-block">Show your support for a free and open internet.</span>
      </div>
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/site/dismiss_netneutrality_banner" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="lXlGNZzrw1QTRFyTE2/LWNrNi8wTWZTK1TLUInQbiVyhhyWn2WhO81ZEa+E9n/Cm9t6r6AsQI6uo92yIWt9SRw==" /></div>
        <a class="btn border-0" href="/save-net-neutrality">Learn more</a>
        <button type="submit" class="btn-link text-white p-2 ml-1">
          <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
          <span class="sr-only">Dismiss</span>
        </button>
</form>    </div>
  </div>




        <header class="Header header-logged-out  position-relative f4 py-3" role="banner">
  <div class="container-lg d-flex px-3">
    <div class="d-flex flex-justify-between flex-items-center">
      <a class="header-logo-invertocat my-0" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
        <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
      </a>

    </div>

    <div class="HeaderMenu HeaderMenu--bright d-flex flex-justify-between flex-auto">
        <nav class="mt-0">
          <ul class="d-flex list-style-none">
              <li class="ml-2">
                <a href="/features" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features/project-management /features/code-review /features/project-management /features/integrations /features">
                  Features
</a>              </li>
              <li class="ml-4">
                <a href="/business" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business">
                  Business
</a>              </li>

              <li class="ml-4">
                <a href="/explore" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore">
                  Explore
</a>              </li>

              <li class="ml-4">
                    <a href="/marketplace" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:marketplace" data-selected-links=" /marketplace">
                      Marketplace
</a>              </li>
              <li class="ml-4">
                <a href="/pricing" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing">
                  Pricing
</a>              </li>
          </ul>
        </nav>

      <div class="d-flex">
          <div class="d-lg-flex flex-items-center mr-3">
            <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/basecamp/local_time/search" class="js-site-search-form" data-scoped-search-url="/basecamp/local_time/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/basecamp/local_time/blob/master/app/assets/javascripts/local-time.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>

          </div>

        <span class="d-inline-block">
            <div class="HeaderNavlink px-0 py-2 m-0">
              <a class="text-bold text-white no-underline" href="/login?return_to=%2Fbasecamp%2Flocal_time%2Fblob%2Fmaster%2Fapp%2Fassets%2Fjavascripts%2Flocal-time.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
                <span class="text-gray">or</span>
                <a class="text-bold text-white no-underline" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
            </div>
        </span>
      </div>
    </div>
  </div>
</header>


  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      



  



  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav ">
    <div class="repohead-details-container clearfix container ">

      <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2Fbasecamp%2Flocal_time"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/basecamp/local_time/watchers"
     aria-label="50 users are watching this repository">
    50
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fbasecamp%2Flocal_time"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/basecamp/local_time/stargazers"
      aria-label="1326 users starred this repository">
      1,326
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fbasecamp%2Flocal_time"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/basecamp/local_time/network" class="social-count"
       aria-label="94 users forked this repository">
      94
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/basecamp" class="url fn" rel="author">basecamp</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/basecamp/local_time" data-pjax="#js-repo-pjax-container">local_time</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/basecamp/local_time" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /basecamp/local_time" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/basecamp/local_time/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /basecamp/local_time/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">5</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/basecamp/local_time/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /basecamp/local_time/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">1</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/basecamp/local_time/projects" class="js-selected-navigation-item reponav-item" data-hotkey="g b" data-selected-links="repo_projects new_repo_project repo_project /basecamp/local_time/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>


  <a href="/basecamp/local_time/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /basecamp/local_time/pulse">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
  <a href="/basecamp/local_time/blob/e083fd19d407f936d99230c4c45717c45242551c/app/assets/javascripts/local-time.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:3d04ed9d8b58e5d3f7c76c79ce6a7695 -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/basecamp/local_time/blob/master/app/assets/javascripts/local-time.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/basecamp/local_time/blob/try-jquery/app/assets/javascripts/local-time.js"
               data-name="try-jquery"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                try-jquery
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/basecamp/local_time/blob/tz/app/assets/javascripts/local-time.js"
               data-name="tz"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                tz
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/basecamp/local_time/blob/update-element/app/assets/javascripts/local-time.js"
               data-name="update-element"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                update-element
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/basecamp/local_time/tree/v2.0.0/app/assets/javascripts/local-time.js"
              data-name="v2.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.0">
                v2.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/basecamp/local_time/tree/v1.0.3/app/assets/javascripts/local-time.js"
              data-name="v1.0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.3">
                v1.0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/basecamp/local_time/tree/v1.0.2/app/assets/javascripts/local-time.js"
              data-name="v1.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.2">
                v1.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/basecamp/local_time/tree/v1.0.1/app/assets/javascripts/local-time.js"
              data-name="v1.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.1">
                v1.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/basecamp/local_time/tree/v1.0.0/app/assets/javascripts/local-time.js"
              data-name="v1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0">
                v1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/basecamp/local_time/tree/v0.3.0/app/assets/javascripts/local-time.js"
              data-name="v0.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.0">
                v0.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/basecamp/local_time/tree/v0.2.0/app/assets/javascripts/local-time.js"
              data-name="v0.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.0">
                v0.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/basecamp/local_time/tree/v0.1.0/app/assets/javascripts/local-time.js"
              data-name="v0.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.0">
                v0.1.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/basecamp/local_time/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/basecamp/local_time"><span>local_time</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/basecamp/local_time/tree/master/app"><span>app</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/basecamp/local_time/tree/master/app/assets"><span>assets</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/basecamp/local_time/tree/master/app/assets/javascripts"><span>javascripts</span></a></span><span class="separator">/</span><strong class="final-path">local-time.js</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/basecamp/local_time/commit/b898fcfeca4cc867196f96712f0ca497fcd6db23" data-pjax>
          b898fcf
        </a>
        <relative-time datetime="2017-08-07T12:18:46Z">Aug 7, 2017</relative-time>
      </span>
      <div>
        <img alt="@javan" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/5355?s=40&amp;v=4" width="20" />
        <a href="/javan" class="user-mention" rel="contributor">javan</a>
          <a href="/basecamp/local_time/commit/b898fcfeca4cc867196f96712f0ca497fcd6db23" class="message" data-pjax="true" title="Include compiled local-time.js to support installing from GitHub directly">Include compiled local-time.js to support installing from GitHub dire…</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>1</strong>
         contributor
      </button>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@javan" height="24" src="https://avatars0.githubusercontent.com/u/5355?s=48&amp;v=4" width="24" />
            <a href="/javan">javan</a>
          </li>
      </ul>
    </div>
  </div>


  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/basecamp/local_time/raw/master/app/assets/javascripts/local-time.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/basecamp/local_time/blame/master/app/assets/javascripts/local-time.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/basecamp/local_time/commits/master/app/assets/javascripts/local-time.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>


        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      1 lines (1 sloc)
      <span class="file-info-divider"></span>
    9.62 KB
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">(function(){var t=this;(function(){(function(){var t=[].slice;this.LocalTime={config:{},run:function(){return this.getController().processElements()},process:function(){var e,n,r,a;for(n=1&lt;=arguments.length?t.call(arguments,0):[],r=0,a=n.length;r&lt;a;r++)e=n[r],this.getController().processElement(e);return n.length},getController:function(){return null!=this.controller?this.controller:this.controller=new e.Controller}}}).call(this)}).call(t);var e=t.LocalTime;(function(){(function(){e.config.i18n={en:{date:{dayNames:[&quot;Sunday&quot;,&quot;Monday&quot;,&quot;Tuesday&quot;,&quot;Wednesday&quot;,&quot;Thursday&quot;,&quot;Friday&quot;,&quot;Saturday&quot;],abbrDayNames:[&quot;Sun&quot;,&quot;Mon&quot;,&quot;Tue&quot;,&quot;Wed&quot;,&quot;Thu&quot;,&quot;Fri&quot;,&quot;Sat&quot;],monthNames:[&quot;January&quot;,&quot;February&quot;,&quot;March&quot;,&quot;April&quot;,&quot;May&quot;,&quot;June&quot;,&quot;July&quot;,&quot;August&quot;,&quot;September&quot;,&quot;October&quot;,&quot;November&quot;,&quot;December&quot;],abbrMonthNames:[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;,&quot;Sep&quot;,&quot;Oct&quot;,&quot;Nov&quot;,&quot;Dec&quot;],yesterday:&quot;yesterday&quot;,today:&quot;today&quot;,tomorrow:&quot;tomorrow&quot;,on:&quot;on {date}&quot;,formats:{&quot;default&quot;:&quot;%b %e, %Y&quot;,thisYear:&quot;%b %e&quot;}},time:{am:&quot;am&quot;,pm:&quot;pm&quot;,singular:&quot;a {time}&quot;,singularAn:&quot;an {time}&quot;,elapsed:&quot;{time} ago&quot;,second:&quot;second&quot;,seconds:&quot;seconds&quot;,minute:&quot;minute&quot;,minutes:&quot;minutes&quot;,hour:&quot;hour&quot;,hours:&quot;hours&quot;,formats:{&quot;default&quot;:&quot;%l:%M%P&quot;}},datetime:{at:&quot;{date} at {time}&quot;,formats:{&quot;default&quot;:&quot;%B %e, %Y at %l:%M%P %Z&quot;}}}}}).call(this),function(){e.config.locale=&quot;en&quot;,e.config.defaultLocale=&quot;en&quot;}.call(this),function(){e.config.timerInterval=6e4}.call(this),function(){var t,n,r;r=!isNaN(Date.parse(&quot;2011-01-01T12:00:00-05:00&quot;)),e.parseDate=function(t){return t=t.toString(),r||(t=n(t)),new Date(Date.parse(t))},t=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|[-+]?[\d:]+)$/,n=function(e){var n,r,a,i,o,s,u,c,l;if(a=e.match(t))return a[0],c=a[1],o=a[2],n=a[3],r=a[4],i=a[5],u=a[6],l=a[7],&quot;Z&quot;!==l&amp;&amp;(s=l.replace(&quot;:&quot;,&quot;&quot;)),c+&quot;/&quot;+o+&quot;/&quot;+n+&quot; &quot;+r+&quot;:&quot;+i+&quot;:&quot;+u+&quot; GMT&quot;+[s]}}.call(this),function(){e.elementMatchesSelector=function(){var t,e,n,r,a,i;return t=document.documentElement,e=null!=(n=null!=(r=null!=(a=null!=(i=t.matches)?i:t.matchesSelector)?a:t.webkitMatchesSelector)?r:t.mozMatchesSelector)?n:t.msMatchesSelector,function(t,n){if((null!=t?t.nodeType:void 0)===Node.ELEMENT_NODE)return e.call(t,n)}}()}.call(this),function(){var t,n,r;t=e.config,r=t.i18n,e.getI18nValue=function(a,i){var o,s;return null==a&amp;&amp;(a=&quot;&quot;),o=(null!=i?i:{locale:t.locale}).locale,s=n(r[o],a),null!=s?s:o!==t.defaultLocale?e.getI18nValue(a,{locale:t.defaultLocale}):void 0},e.translate=function(t,n,r){var a,i,o;null==n&amp;&amp;(n={}),o=e.getI18nValue(t,r);for(a in n)i=n[a],o=o.replace(&quot;{&quot;+a+&quot;}&quot;,i);return o},n=function(t,e){var n,r,a,i,o;for(o=t,i=e.split(&quot;.&quot;),n=0,a=i.length;n&lt;a;n++){if(r=i[n],null==o[r])return null;o=o[r]}return o}}.call(this),function(){var t,n,r,a,i;t=e.getI18nValue,i=e.translate,e.strftime=a=function(e,o){var s,u,c,l,d,h,f;return u=e.getDay(),s=e.getDate(),d=e.getMonth(),f=e.getFullYear(),c=e.getHours(),l=e.getMinutes(),h=e.getSeconds(),o.replace(/%([%aAbBcdeHIlmMpPSwyYZ])/g,function(o){switch(o[0],o[1]){case&quot;%&quot;:return&quot;%&quot;;case&quot;a&quot;:return t(&quot;date.abbrDayNames&quot;)[u];case&quot;A&quot;:return t(&quot;date.dayNames&quot;)[u];case&quot;b&quot;:return t(&quot;date.abbrMonthNames&quot;)[d];case&quot;B&quot;:return t(&quot;date.monthNames&quot;)[d];case&quot;c&quot;:return e.toString();case&quot;d&quot;:return n(s);case&quot;e&quot;:return s;case&quot;H&quot;:return n(c);case&quot;I&quot;:return n(a(e,&quot;%l&quot;));case&quot;l&quot;:return 0===c||12===c?12:(c+12)%12;case&quot;m&quot;:return n(d+1);case&quot;M&quot;:return n(l);case&quot;p&quot;:return i(&quot;time.&quot;+(c&gt;11?&quot;pm&quot;:&quot;am&quot;)).toUpperCase();case&quot;P&quot;:return i(&quot;time.&quot;+(c&gt;11?&quot;pm&quot;:&quot;am&quot;));case&quot;S&quot;:return n(h);case&quot;w&quot;:return u;case&quot;y&quot;:return n(f%100);case&quot;Y&quot;:return f;case&quot;Z&quot;:return r(e)}})},n=function(t){return(&quot;0&quot;+t).slice(-2)},r=function(t){var e,n,r,a,i;return i=t.toString(),(e=null!=(n=i.match(/\(([\w\s]+)\)$/))?n[1]:void 0)?/\s/.test(e)?e.match(/\b(\w)/g).join(&quot;&quot;):e:(e=null!=(r=i.match(/(\w{3,4})\s\d{4}$/))?r[1]:void 0)?e:(e=null!=(a=i.match(/(UTC[\+\-]\d+)/))?a[1]:void 0)?e:&quot;&quot;}}.call(this),function(){e.CalendarDate=function(){function t(t,e,n){this.date=new Date(Date.UTC(t,e-1)),this.date.setUTCDate(n),this.year=this.date.getUTCFullYear(),this.month=this.date.getUTCMonth()+1,this.day=this.date.getUTCDate(),this.value=this.date.getTime()}return t.fromDate=function(t){return new this(t.getFullYear(),t.getMonth()+1,t.getDate())},t.today=function(){return this.fromDate(new Date)},t.prototype.equals=function(t){return(null!=t?t.value:void 0)===this.value},t.prototype.is=function(t){return this.equals(t)},t.prototype.isToday=function(){return this.is(this.constructor.today())},t.prototype.occursOnSameYearAs=function(t){return this.year===(null!=t?t.year:void 0)},t.prototype.occursThisYear=function(){return this.occursOnSameYearAs(this.constructor.today())},t.prototype.daysSince=function(t){if(t)return(this.date-t.date)/864e5},t.prototype.daysPassed=function(){return this.constructor.today().daysSince(this)},t}()}.call(this),function(){var t,n,r;n=e.strftime,r=e.translate,t=e.getI18nValue,e.RelativeTime=function(){function a(t){this.date=t,this.calendarDate=e.CalendarDate.fromDate(this.date)}return a.prototype.toString=function(){var t,e;return(e=this.toTimeElapsedString())?r(&quot;time.elapsed&quot;,{time:e}):(t=this.toWeekdayString())?(e=this.toTimeString(),r(&quot;datetime.at&quot;,{date:t,time:e})):r(&quot;date.on&quot;,{date:this.toDateString()})},a.prototype.toTimeOrDateString=function(){return this.calendarDate.isToday()?this.toTimeString():this.toDateString()},a.prototype.toTimeElapsedString=function(){var t,e,n,a,i;return n=(new Date).getTime()-this.date.getTime(),a=Math.round(n/1e3),e=Math.round(a/60),t=Math.round(e/60),n&lt;0?null:a&lt;10?(i=r(&quot;time.second&quot;),r(&quot;time.singular&quot;,{time:i})):a&lt;45?a+&quot; &quot;+r(&quot;time.seconds&quot;):a&lt;90?(i=r(&quot;time.minute&quot;),r(&quot;time.singular&quot;,{time:i})):e&lt;45?e+&quot; &quot;+r(&quot;time.minutes&quot;):e&lt;90?(i=r(&quot;time.hour&quot;),r(&quot;time.singularAn&quot;,{time:i})):t&lt;24?t+&quot; &quot;+r(&quot;time.hours&quot;):&quot;&quot;},a.prototype.toWeekdayString=function(){switch(this.calendarDate.daysPassed()){case 0:return r(&quot;date.today&quot;);case 1:return r(&quot;date.yesterday&quot;);case-1:return r(&quot;date.tomorrow&quot;);case 2:case 3:case 4:case 5:case 6:return n(this.date,&quot;%A&quot;);default:return&quot;&quot;}},a.prototype.toDateString=function(){var e;return e=t(this.calendarDate.occursThisYear()?&quot;date.formats.thisYear&quot;:&quot;date.formats.default&quot;),n(this.date,e)},a.prototype.toTimeString=function(){return n(this.date,t(&quot;time.formats.default&quot;))},a}()}.call(this),function(){var t,n=function(t,e){return function(){return t.apply(e,arguments)}};t=e.elementMatchesSelector,e.PageObserver=function(){function e(t,e){this.selector=t,this.callback=e,this.processInsertion=n(this.processInsertion,this),this.processMutations=n(this.processMutations,this)}return e.prototype.start=function(){if(!this.started)return this.observeWithMutationObserver()||this.observeWithMutationEvent(),this.started=!0},e.prototype.observeWithMutationObserver=function(){var t;if(&quot;undefined&quot;!=typeof MutationObserver&amp;&amp;null!==MutationObserver)return t=new MutationObserver(this.processMutations),t.observe(document.documentElement,{childList:!0,subtree:!0}),!0},e.prototype.observeWithMutationEvent=function(){return addEventListener(&quot;DOMNodeInserted&quot;,this.processInsertion,!1),!0},e.prototype.findSignificantElements=function(e){var n;return n=[],(null!=e?e.nodeType:void 0)===Node.ELEMENT_NODE&amp;&amp;(t(e,this.selector)&amp;&amp;n.push(e),n.push.apply(n,e.querySelectorAll(this.selector))),n},e.prototype.processMutations=function(t){var e,n,r,a,i,o,s,u;for(e=[],n=0,a=t.length;n&lt;a;n++)switch(o=t[n],o.type){case&quot;childList&quot;:for(u=o.addedNodes,r=0,i=u.length;r&lt;i;r++)s=u[r],e.push.apply(e,this.findSignificantElements(s))}return this.notify(e)},e.prototype.processInsertion=function(t){var e;return e=this.findSignificantElements(t.target),this.notify(e)},e.prototype.notify=function(t){if(null!=t?t.length:void 0)return&quot;function&quot;==typeof this.callback?this.callback(t):void 0},e}()}.call(this),function(){var t,n,r,a,i=function(t,e){return function(){return t.apply(e,arguments)}};r=e.parseDate,a=e.strftime,n=e.getI18nValue,t=e.config,e.Controller=function(){function o(){this.processElements=i(this.processElements,this),this.pageObserver=new e.PageObserver(s,this.processElements)}var s,u,c;return s=&quot;time[data-local]:not([data-localized])&quot;,o.prototype.start=function(){if(!this.started)return this.processElements(),this.startTimer(),this.pageObserver.start(),this.started=!0},o.prototype.startTimer=function(){var e;if(e=t.timerInterval)return null!=this.timer?this.timer:this.timer=setInterval(this.processElements,e)},o.prototype.processElements=function(t){var e,n,r;for(null==t&amp;&amp;(t=document.querySelectorAll(s)),n=0,r=t.length;n&lt;r;n++)e=t[n],this.processElement(e);return t.length},o.prototype.processElement=function(t){var e,i,o,s,l;if(e=t.getAttribute(&quot;datetime&quot;),i=t.getAttribute(&quot;data-format&quot;),o=t.getAttribute(&quot;data-local&quot;),s=r(e),!isNaN(s))return t.hasAttribute(&quot;title&quot;)||(l=a(s,n(&quot;datetime.formats.default&quot;)),t.setAttribute(&quot;title&quot;,l)),t.textContent=function(){switch(o){case&quot;time&quot;:return u(t),a(s,i);case&quot;date&quot;:return u(t),c(s).toDateString();case&quot;time-ago&quot;:return c(s).toString();case&quot;time-or-date&quot;:return c(s).toTimeOrDateString();case&quot;weekday&quot;:return c(s).toWeekdayString();case&quot;weekday-or-date&quot;:return c(s).toWeekdayString()||c(s).toDateString()}}()},u=function(t){return t.setAttribute(&quot;data-localized&quot;,&quot;&quot;)},c=function(t){return new e.RelativeTime(t)},o}()}.call(this),function(){var t,n,r,a;a=!1,t=function(){return document.attachEvent?&quot;complete&quot;===document.readyState:&quot;loading&quot;!==document.readyState},n=function(t){var e;return null!=(e=&quot;function&quot;==typeof requestAnimationFrame?requestAnimationFrame(t):void 0)?e:setTimeout(t,17)},r=function(){var t;return t=e.getController(),t.start()},e.start=function(){if(!a)return a=!0,&quot;undefined&quot;!=typeof MutationObserver&amp;&amp;null!==MutationObserver||t()?r():n(r)},window.LocalTime===e&amp;&amp;e.start()}.call(this)}).call(this),&quot;object&quot;==typeof module&amp;&amp;module.exports?module.exports=e:&quot;function&quot;==typeof define&amp;&amp;define.amd&amp;&amp;define(e)}).call(this);</td>
      </tr>
</table>

  <div class="BlobToolbar position-absolute js-file-line-actions dropdown js-menu-container js-select-menu d-none" aria-hidden="true">
    <button class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1 dropdown-toggle js-menu-target" id="js-file-line-action-button" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Inline file action toolbar" aria-controls="inline-file-actions">
      <svg aria-hidden="true" class="octicon octicon-kebab-horizontal" height="16" version="1.1" viewBox="0 0 13 16" width="13"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
    </button>
    <div class="dropdown-menu-content js-menu-content" id="inline-file-actions">
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2">
        <li><a class="js-zeroclipboard dropdown-item" style="cursor:pointer;" id="js-copy-lines" data-original-text="Copy lines">Copy lines</a></li>
        <li><a class="js-zeroclipboard dropdown-item" id= "js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</a></li>
        <li><a href="/basecamp/local_time/blame/e083fd19d407f936d99230c4c45717c45242551c/app/assets/javascripts/local-time.js" class="dropdown-item js-update-url-with-hash" id="js-view-git-blame">View git blame</a></li>
          <li><a href="/basecamp/local_time/issues/new" class="dropdown-item" id="js-new-issue">Open new issue</a></li>
      </ul>
    </div>
  </div>

  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between py-6 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2018 <span title="0.12551s from unicorn-3391298341-54xgg">GitHub</span>, Inc.</li>
        <li class="mr-3"><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li class="mr-3"><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>

    <a href="https://github.com" aria-label="Homepage" class="footer-octicon" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/compat-e42a8bf9c380758734e39851db04de7cbeeb2f3860efbd481c96ac12c25a6ecb.js"></script>
    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-3907d9aad812b8c94147c88165cb4a9693c57cf99f0e8e01053fc79de7a9d911.js"></script>
    
    <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-c1b10da21f1932a4173fcfb60676e2ad32e515f7ae77563ddb658f04cd26368d.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

