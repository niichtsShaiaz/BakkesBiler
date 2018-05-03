/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import dto.CarMessage;
import dto.JSONMessage;
import entity.CarFacade;
import entity.Vehicles;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author ezl
 */
@Path("CarApi")
public class CarApiResource
{
    Gson gson = new Gson();
    CarFacade carFacade = CarFacade.getInstance();
    
    @Context
    private UriInfo context;

    /**
     * Creates a new instance of CarApiResource
     */
    public CarApiResource()
    {
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getCars(){
        List<JSONMessage> cars = new ArrayList<>();
        for(Vehicles v : carFacade.getAllCars())
        {
            cars.add(new CarMessage(v));
        }
        return gson.toJson(cars);
    }  
    
    @GET
    @Path("{regno}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getCarRegNo(@PathParam("regno") String regno)
    {
        JSONMessage car = new CarMessage(carFacade.getCarByRegno(regno));
        return gson.toJson(car);
    }
    
    @GET
    @Path("{location}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getCarLocation(@PathParam("location") String location)
    {
        return "no data yet";
    }
    
    @GET
    @Path("{category}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getCarCategory(@PathParam("category") String category)
    {
        return "no data yet";
    }
}
