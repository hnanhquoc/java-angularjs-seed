package controller;

import model.Hello;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/home")
@RequestScoped
public class HomeController {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Hello get() {
        return new Hello("world");
    }
}
