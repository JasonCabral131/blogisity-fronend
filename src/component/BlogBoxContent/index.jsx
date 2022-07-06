import React from 'react'
import "./style.scss";
const BlogBoxContent = () => {
  return (
    <div className='content-blog-info-container pointer'>
              <div className='content-blog-img'>
                  <img 
                   src="data:image/jpeg;base64,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"
                   />
            
              </div>
              <div className='blog-info'>
                  <div className='blog-title text-wrap'>News Needs to Meet Its Audiences Where They Are</div>
                  <div className='blog-content-description text-wrap'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.
                  </div>
                  <div className='blog-owner-info d-flex justify-content-start mt-3 align-items-center text-align-center'>
                        <img alt="blog-content-img" src='data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTI3Ljk4IDIwMTYuODciIGZpbGw9IiM0MWUwZmQiPgogIDxwYXRoICBkPSJNODg4IDExMTkuMTdjMTYtMzIuNjIgMzIuODQtNjUuMzcgNTAuMTctOTcuMzVsLjE1LS4yNyAxOC4zOS0zNS42OCAyNy4xNi00NSAuMTctLjI5YzEwLjE0LTE3LjI2IDIwLjY2LTM0LjY4IDMxLjI3LTUxLjc4bDE4LjY5LTMwLjg3YzI0Ljg4LTQxLjE5IDQ0Ljg4LTcxLjIzIDc2LjQzLTExNC43NiAxNy0yMy40MyAzMy4xMi00NCA1OC42Ni03NS45MmwuMDYtLjA2IDEuMjYtMS41OS40OS0uNjNjMTAuMzctMTMuMjIgMjAuODQtMjYuMjUgMzEuMTEtMzguNzNsLjM0LS40Mi4yLS4yNWMyMy44My0yOS41MSA0OC4xMi01OS4xMyA3Mi4xOS04OGw5LjU3LTExLjQ4VjM1Ni41NEgxMjY3Yy05LjIzLTguNjgtMTguNjYtMTcuMy0yOC4wOC0yNS42OS03Ni4zMi02Ny43Mi0xNTIuNDMtMTIwLjg1LTIyNi4yNy0xNTcuNzktNzUuNzEtMzcuOTItMTQ1LjYzLTU3LjE0LTIwNy44LTU3LjE0LTQ0LjM5IDAtODQuMDYgOS45NC0xMTcuOTEgMjkuNTMtMzIuNTUgMTguODQtNTkuOSA0Ni45MS04MS4zMSA4My40NC0yMC4wNiAzNC4yMy0zNC44NCA3NS44OS00My45NSAxMjMuODEtMTcuNTQgOTIuMzctMTMuNzQgMjA4IDExIDMzNC4zNCAzLjEyIDE1LjkgNi41NiAzMiAxMC4yNSA0OC0xOS43NCA2LTM4LjkxIDEyLjE4LTU3LjEzIDE4LjUzLTExOS4yNiA0MS41OC0yMTkgOTUuOTEtMjg4LjQyIDE1Ny4xNC0zNiAzMS43MS02My44NCA2NS4yMy04Mi44OSA5OS42Mi0yMC4yNCAzNi41Ny0zMC41MSA3NC4wOC0zMC41MSAxMTEuNDkgMCA3NSA0MS41NSAxNTEgMTIwLjE1IDIxOS45NCA3NCA2NC45MyAxNzguNjUgMTIxLjYyIDMwMi41NSAxNjQgMTEuNTEgMy45MSAyMy4yMiA3LjcxIDM1IDExLjM0LTQuMTIgMTcuOTMtNy45MyAzNi0xMS4zNiA1NC0yMy41NiAxMjQuMDgtMjYuMzEgMjM3LjYyLTggMzI4LjM1IDkuNTEgNDcgMjQuNjEgODcuODkgNDQuODkgMTIxLjU3IDIxLjU2IDM1LjggNDguOTMgNjMuNDQgODEuMzQgODIuMTMgMzQuMTUgMTkuNjkgNzQuMzQgMjkuNjcgMTE5LjQ1IDI5LjY3IDYxLjQyIDAgMTMwLjA5LTE4LjIxIDIwNC4xMS01NC4xMyA3Mi41Ni0zNS4yMSAxNDYuNjMtODUuNjQgMjIwLjEzLTE0OS44OSAxMS4zMy05LjkgMjMtMjAuNDkgMzQuNjYtMzEuNTNoMTcuNDF2LTE3NC4zOWwtNi4zNC03LjgtMy0zLjY3LTc5LjgyLTk4LjU1LTQ0LjM1LTU0Ljc1Yy0yMi4zOS0yNy42NC01OC4yNS03OC43OS0xMDEtMTQ0LTM0LTUxLjg0LTU4Ljc2LTkzLjQ3LTcwLjUtMTEzLjYzbC0xLjI4LTIuMjFjLTIwLjQ5LTM1LjMzLTM1LjcxLTYzLjc5LTQ3LjkzLTg2LjY0LTE1LjMtMjguNjMtMzAuMzktNTcuODctNDQuOTEtODdsMi42Ni01LjE3em0tODAuODYtMTcyLjg5Yy0xMy41My0zNC43LTI1LjkyLTY5LjEzLTM3LTEwMi44MSAzNC41Ny03LjEzIDcwLjUxLTEzLjUzIDEwNy4zMi0xOS4xMS0xMi4yOCAyMC4xMS0yNC4zNCA0MC40MS0zNiA2MC42NHMtMjMuMTIgNDAuNjktMzQuMzIgNjEuMjh6bS0zOC4yNSA0NjIuMWMxMS40NS0zNC44NiAyNC4zMS03MC41NiAzOC4zOS0xMDYuNTkgMTEuMjkgMjAuNyAyMi44NyA0MS4zIDM0LjU4IDYxLjUzIDEyLjI3IDIxLjE5IDI1IDQyLjQ4IDM3Ljk1IDYzLjU4LTM4LjQ2LTUuMzItNzUuNjItMTEuNTMtMTEwLjkyLTE4LjUxek03MDcuMTggMzk3LjE2YzktNjEuNzQgMjkuMTQtMTA1Ljg3IDU1LjM3LTEyMS4wNiAxMC44OS02LjMxIDI1LjM0LTkuNSA0Mi45My05LjUgMzguNDcgMCA4OC4yNCAxNS4xIDE0My45MSA0My42NyA2MC4zNCAzMSAxMjUuNzcgNzcuMTEgMTg5LjIyIDEzMy40NXE1LjkgNS4yNCAxMi4wNyAxMC44OWMtNTUuODEgNjEuNzEtMTEwLjgxIDEzMC4yOC0xNjMuNjggMjA0LjEtOTAuMDggOC44LTE3Ni42OCAyMS45NC0yNTcuNzYgMzkuMTEtMi45My0xMi44NC01LjY4LTI1Ljc1LTguMi0zOC41bC0uMjQtMS4zMmMtMTkuMzMtOTguNzYtMjQuMDQtMTg5LTEzLjYyLTI2MC44NHptMTEuMzEgNzI3Yy0zOC4xIDg0LTcwLjQ4IDE2Ny4xNi05Ni4zNyAyNDcuNDYtOS0yLjgtMTcuODktNS43Mi0yNi42NS04LjctMTAzLTM1LjIxLTE4OC43OS04MC42Ni0yNDguMDgtMTMxLjQzLTQ1LjM3LTM4Ljg1LTcyLjQ1LTc5LjgzLTcyLjQ1LTEwOS42MyAwLTMwLjU5IDI3LjA5LTcwIDc0LjM0LTEwOC4yIDU1LTQ0LjQ3IDEzMy4yNy04NS4xMSAyMjYuMTktMTE3LjUgMTUuNzktNS40OCAzMS44Ny0xMC43MyA0OC0xNS42NCAyNS41MyA3OS4xMyA1Ny40OCAxNjAuOTkgOTUuMDEgMjQzLjYzem0uMTIgNDc0LjkyYzIuODYtMTUgNi0zMC4wOSA5LjQzLTQ1LjA5IDgwIDE2LjM3IDE2Ny41OSAyOC43MSAyNjAuNzUgMzYuNzEgNTMuMzggNzQuMzQgMTA4Ljg0IDE0My4zNyAxNjUuMDUgMjA1LjQ0LTYuOTQgNi4zOS0xMy45NCAxMi42OC0yMC45IDE4Ljc5LTgxLjM3IDcxLjEzLTE2My4wOSAxMjIuNTUtMjM2LjI4IDE0OC43MWwtMS41Mi41NGMtMzIuOCAxMS41OC02Mi4wOSAxNy40NS04NyAxNy40NS0xOC4zOCAwLTMzLjIyLTMuMTgtNDQuMTEtOS40Ni0yNi41MS0xNS4yOS00Ny4xNC01OC40Ni01Ni42LTExOC40NS0xMS4wNi02OS45MS03LjE5LTE1Ny45NyAxMS4xNy0yNTQuNjV6IgogICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMy45OCAtMTE1LjkyKSIgaWQ9Il9Hcm91cF8iIGRhdGEtbmFtZT0iJmx0O0dyb3VwJmd0OyIgLz4KICA8cGF0aCBkPSJNMjE5NS4wNyAxMjA1LjFxLTU2LjI2LTEwMy40NS0xNjUuNTQtMTM0LjIzYTIuODUgMi44NSAwIDAgMS0xLjc5LTIuODUgMyAzIDAgMCAxIDEuMzctMi42OGM1NC4yNC0zMC4xNiA5NS45My03My4xMSAxMjUuMTUtMTI3LjlxNDQuMTUtODIuODkgNDQuMTYtMTk5LjQ5YzAtMTI4LjI1LTMyLjQ1LTIyMy42NS05Ny4wNi0yODcuMTFzLTE1MC42Mi05NS0yNTcuNy05NWgtNTc4LjM1Yy0xLjI1IDAtMi4yNyAxLjMxLTIuMjcgMi45M1YxODk0LjNjMCAxLjYyIDEgMi45MyAyLjI3IDIuOTNoNTQ2LjU3cTExNS40MiAwIDE5OS4xMS0zMy42OWM1NS45MS0yMi40MiAxMDEuNC01Mi42OCAxMzcuMjEtOTAuNjhzNjEuOTItODMuMzMgNzguNjYtMTM2YzE2Ljc0LTUyLjIzIDI1LjEtMTA4LjggMjUuMS0xNjkuMjQuMDQtMTA1LjM3LTE5LjA4LTE5Mi41Ny01Ni44OS0yNjIuNTJ6bS03MjIuMzItNjI4YzAtMS42MiAxLTIuOTMgMi4yNy0yLjkzaDMzOS40NmM1Ni45NSAwIDEwMC41MSAxNiAxMzAuNjUgNDcuNTVzNDUuMiA4Ni40IDQ1LjIgMTY0LjE4YzAgNjkuMTgtMTYuNzQgMTIxLjkyLTUwLjI1IDE1OS4wOHMtNzUuMzcgNTUuMzItMTI1LjYzIDU1LjMySDE0NzVjLTEuMjUgMC0yLjI3LTEuMzEtMi4yNy0yLjkzem01MTguMTYgMTAzNS44Yy0zNC44NiA0Mi43Ni04NC40MSA2NC0xNDguMDcgNjRIMTQ3NWMtMS4yNSAwLTIuMjctMS4zMS0yLjI3LTIuOTN2LTQ3Ni40YzAtMS42MiAxLTIuOTMgMi4yNy0yLjkzaDM2Ny44MmM2My42NiAwIDExMi41NyAxOS44OSAxNDguMDcgNjEuMzVzNTIuOTMgOTkuODIgNTIuOTMgMTc2LjNjLjAyIDc3Ljc3LTE3Ljc2IDEzOC4yNy01Mi45MSAxODAuNjF6IgogICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMy45OCAtMTE1LjkyKSIgLz48L3N2Zz4K'/>
                      <div className='creator ms-2'>Dave Rogers</div>  
                      <div className='mx-2 '>in</div>   
                      <div className='type-content'>Politics</div>
                  </div>
                  <div className='blog-date-info'>
                        June 14 <span className='circle'>|</span> <span className='time-sched'> 3 min ago</span>
                  </div>
              </div>
    </div>
  )
}

export default BlogBoxContent