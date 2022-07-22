import { Component } from "react";
import { connect } from "react-redux";
import NavigationContainer from "../containers/NavigationContainer";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { getProject } from "../actions/myProjects";
import { Link } from 'react-router-dom'



import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';



class ProjectView extends Component{

    

    
    componentDidMount() {                                 
        this.props.getProject(this.props.match.params.id);
    }

    onTestSelect = (row) => {
        console.log(row)

        
        this.props.history.push(`/bugs/${row.id}`)
    }


    render(){
        

        
        
        const project = this.props.project || []

        const selectRow = {
            mode: 'radio',
            clickToSelect: true,
            onSelect: this.onTestSelect
          };

        const columns = [{
            dataField: 'id',
            text: 'Product ID'
          }, {
            dataField: 'summary',
            text: 'Summary'
          }, {
            dataField: 'description',
            text: 'Description'
          }, {
            dataField: 'status',
            text: 'status',
            filter: textFilter()
          }, {
            dataField: 'priority',
            text: 'priority',
            filter: textFilter()
          }];

        
         
        return(
            <>
            <NavigationContainer />
            <div className="jumbotron">
                <div className="projects-header">
                    <h1>Details for Project #{project.id}</h1>
                    <Link to={{ pathname: `/myprojects` }}>Back to Projects </Link> 
                    <Link to={{ pathname: `/projects/${project.id}/edit`, state: { project: project } }}>Edit Project</Link> 
                </div>

            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title>Tickets for this project</Card.Title>
                        <Card.Text>
                            Condensed ticket details
                        </Card.Text>
                        
                       
                    </Card.Body>
                    <Card.Footer>
                    {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                    </Card.Footer>
                </Card>
                
                </CardGroup>
          </div>
          {this.props.project.attributes && <BootstrapTable  keyField='id' columns={ columns } data={project.attributes.bugs} pagination={ paginationFactory() } filter={ filterFactory() } selectRow={ selectRow } /> } 
          </>)
    }




}

const mapStatetoProps = (state) => {
    return {
     project: state.project
    }
 }

export default connect(mapStatetoProps, {getProject} )(ProjectView); 






