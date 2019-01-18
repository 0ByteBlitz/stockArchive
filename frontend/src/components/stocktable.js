import React, { Component } from 'react'; 
import Footer from './footer';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import "../App.css";

class Stocktable extends Component {
    //state initialization
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null
  };

  //when component first mounts, it fetchs existing data in db
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({
        intervalIsSet: interval
      });
    }
  }
//kill process
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({
        intervalIsSet: null
      });
    }
  }

  //fetch data from database
  getDataFromDb = () => {
    fetch("/api/stocks")
      .then(data => data.json())
      .then(res=> this.setState({ data: res.data}));
  };


  //fetch 10 high performing stocks from database
  render() {
    const { data, pages, loading } = this.state;
    return (
        <div>
     <div className="reacTable">
        <ReactTable
        data = {
          data
        }
        columns = {
          [{
              columns: [{
                  Header: "Symbol",
                  accessor: "symbol",
                  Cell: e =><a href={e.value}> {e.value} </a>
                }]
            },
            {
              Header: "STOCK INFO",
              columns: [{
                  Header: "Open",
                  accessor: "open"
                },
                {
                  Header: "Date",
                  accessor: "date"
                },
                {
                  Header: "Close",
                  accessor: "close"
                },
                {
                  Header: "Low",
                  accessor: "low"
                },
                {
                  Header: "High",
                  accessor: "high"
                },
                {
                  Header: "Volume",
                  accessor: "volume"
                }
              ]
            }
          ]
        }
        pages = {
            pages
        } 
        loading = {
            loading
        }
        onFetchData = {
            this.fetchData
        }
        filterable
        defaultPageSize = {
          10
        }
        defaultSorted = {
          [{
            id: "high",
            desc: true
          }]
        }
        
        className = "-striped -highlight" />
     </div>
     <Footer />
     </div>
    );
  }
}

export default Stocktable;