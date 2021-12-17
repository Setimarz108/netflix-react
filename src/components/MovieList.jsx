import {Component} from 'react'


class MovieList extends Component{
    state ={
        moviesCollection1 : [],
        moviesColletion2 : [],
        moviesColletion3 : [],


    } 

     fetchMovies = async () => {
         
       try{ let response = await fetch('http://www.omdbapi.com/?apikey=6f39839b&s=harry%20potter'  
               )
                
          if(response.ok){
                 const moviesArray = await response.json();
                 console.log(moviesArray)
                 
                this.setState({ moviesCollection1: moviesArray.Search });
            console.log(moviesArray.Search)
          } 
       }catch (error){
           console.log('error')
       }
    }
    fetchMovies2 = async () => {
         
        try{ let response = await fetch('http://www.omdbapi.com/?apikey=6f39839b&s=lord%20of%20the%20rings'  
                )
                 
           if(response.ok){
                  const moviesArray = await response.json();
                  console.log(moviesArray)
                  
                 this.setState({ moviesCollection2: moviesArray.Search });
             console.log(moviesArray.Search)
           } 
        }catch (error){
            console.log('error')
        }
     }
     fetchMovies3 = async () => {
         
        try{ let response = await fetch('http://www.omdbapi.com/?apikey=6f39839b&s=marvel'  
                )
                 
           if(response.ok){
                  const moviesArray = await response.json();
                  console.log(moviesArray)
                  
                 this.setState({ moviesCollection3: moviesArray.Search });
             console.log(moviesArray.Search)
           } 
        }catch (error){
            console.log('error')
        }
     }
   componentDidMount = async () =>{

     /* this.fetchMovies1();
     this.fetchMovies2(); */
     this.fetchMovies3();
   }

    render(){
    

        return(
              
            <h1>Movies</h1>
           
                    )
    }

}

export default MovieList