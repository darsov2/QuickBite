package mk.fink.ukim.quickbite.controllers;

import mk.fink.ukim.quickbite.entites.Restaurants;
import mk.fink.ukim.quickbite.entites.RestaurantTable;
import mk.fink.ukim.quickbite.service.RestaurantService;
import mk.fink.ukim.quickbite.service.TableService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/restaurant")
public class RestaurantController {

    private final RestaurantService restaurantService;
    public final TableService tableService;
    public RestaurantController (RestaurantService restaurantService, TableService tableService){
        this.restaurantService = restaurantService;
        this.tableService = tableService;
    }

    @GetMapping("/")
    public List<Restaurants> listRestaurants() {
        return restaurantService.findAllRestaurants();
    }

    @PostMapping("/save")
    public ResponseEntity<Restaurants> saveRestaurant(@RequestParam String city,
                                                      @RequestParam String zipCode,
                                                      @RequestParam String address,
                                                      @RequestParam String description,
                                                      @RequestParam Double longitude,
                                                      @RequestParam Double latitude,
                                                      @RequestParam(required = false) Long id) {

        return this.restaurantService.saveRestaurant(city, zipCode, address, description, longitude, latitude, id)
                .map(restaurant -> ResponseEntity.ok().body(restaurant))
                .orElseGet(() -> ResponseEntity.badRequest().build());

    }

    @GetMapping("/{id}")
    public ResponseEntity<Restaurants> findById(@PathVariable Long id){
        return restaurantService.findById(id)
                .map(restaurants -> ResponseEntity.ok().body(restaurants))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @GetMapping("/delete/{id}")
    public void deleteById(@PathVariable Long id){
        restaurantService.deleteById(id);
    }


    @PostMapping("/{id}/table/save")
    public ResponseEntity<RestaurantTable> saveTable(@PathVariable Long restaurantId,
                                                     @RequestParam(required = false) Long id,
                                                     @RequestParam String description){
        return tableService.saveTable(id, description, restaurantId)
                .map(table -> ResponseEntity.ok().body(table))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @GetMapping("{id}/table/delete")
    public void deleteTableById(@PathVariable Long id){
        tableService.deleteById(id);
    }

}
