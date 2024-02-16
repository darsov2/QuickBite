package mk.fink.ukim.quickbite.controllers;

import mk.fink.ukim.quickbite.entites.Order;
import mk.fink.ukim.quickbite.entites.enums.OrderStatus;
import mk.fink.ukim.quickbite.entites.enums.OrderType;
import mk.fink.ukim.quickbite.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/order")
public class OrderController {
    private final OrderService orderService;

    OrderController(OrderService orderService){
        this.orderService = orderService;
    }


    @GetMapping
    public List<Order> listOrders(){
        return orderService.findAll();
    }

    @PostMapping("/save")
    public ResponseEntity<Order> saveOrder(@RequestParam(required = false) Long id,
                                           @RequestParam String cartItems,
                                           @RequestParam Long restaurantTableId,
                                           @RequestParam Long restuarantId,
                                           @RequestParam OrderType orderType,
                                           @RequestParam String name){

        return orderService.saveOrder(id, cartItems, OrderStatus.CREATED, restaurantTableId, orderType, LocalDateTime.now(), name)
                .map(order -> ResponseEntity.ok().body(order))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> findById(@PathVariable Long id){
        return orderService.findById(id)
                .map(order -> ResponseEntity.ok().body(order))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @GetMapping("{id}/delete")
    void deleteById(@PathVariable Long id){
        orderService.deleteById(id);
    }



}
