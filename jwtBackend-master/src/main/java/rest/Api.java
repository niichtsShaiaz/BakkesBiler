package rest;

import com.google.gson.Gson;
import dto.CarMessage;
import dto.JSONMessage;
import entity.CarFacade;
import entity.Vehicles;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.Consumes;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.SecurityContext;

/**
 * REST Web Service
 *
 * @author lam@cphbusiness.dk
 */
@Path("cars")
public class Api {
    CarFacade carFacade = CarFacade.getInstance();
    Gson gson = new Gson();
    
    @Context
    private UriInfo context;
    
    @Context
    SecurityContext securityContext;

    
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
    public String getCarByRegNumber(){
        return "no data yet";
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{location}")
    public String getCarsByLocation() {
        return "no data yet";
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{category}")
    public String getCarsByCategory() {
        return "no data yet";
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{start}/{end}")
    public String getCarsVacant() {
        return "no data yet";
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{location}/{start}/{end}")
    public String getCarsVacantLocation() {
        return "no data yet";
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{category}/{start}/{end}")
    public String getCarsVacantCategory() {
        return "no data yet";
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{location}/{category}/{start}/{end}")
    public String getCarsVacantLocationCategory() {
        return "no data yet";
    }
    
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("{regno}")
    public String rentCar()
    {
        return "confirm";
    }
    
    
}