package mk.fink.ukim.quickbite.controllers;

import mk.fink.ukim.quickbite.entites.Category;
import mk.fink.ukim.quickbite.entites.Ingredient;
import mk.fink.ukim.quickbite.entites.MenuItem;
import mk.fink.ukim.quickbite.service.CategoryService;
import mk.fink.ukim.quickbite.service.IngredientService;
import mk.fink.ukim.quickbite.service.MenuItemService;
import mk.fink.ukim.quickbite.service.MenuService;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/menu")
public class MenuController {
    private final IngredientService ingredientService;
    private final CategoryService categoryService;
    private final MenuService menuService;
    private final MenuItemService menuItemService;
    MenuController(IngredientService ingredientService, CategoryService categoryService, MenuService menuService,
                   MenuItemService menuItemService){
        this.ingredientService = ingredientService;
        this.categoryService = categoryService;
        this.menuService = menuService;
        this.menuItemService = menuItemService;
    }

    @GetMapping("/ingredient")
    public List<Ingredient> listIngredients()
    {
        return ingredientService.findAll();
    }

    @PostMapping("/ingredient/save")
    public ResponseEntity<Ingredient> saveIngredient(@RequestParam(required = false) Long id,
                                                     @RequestParam Double weight,
                                                     @RequestParam String name,
                                                     @RequestParam Double kcal,
                                                     @RequestParam Double singlePrice){
        return ingredientService.saveIngredient(id, name, weight, kcal, singlePrice)
                .map(ingredient -> ResponseEntity.ok().body(ingredient))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @GetMapping("/ingredient/delete/{id}")
    public void deleteIngredientById(@PathVariable Long id){
        ingredientService.deleteById(id);
    }

    @GetMapping("/category")
    public List<Category> listCategories() {
        return categoryService.findAll();
    }

    @PostMapping("/category/save")
    public ResponseEntity<Category> saveIngredient(@RequestParam(required = false) Long id,
                                                    @RequestParam String name){
        return categoryService.saveCategory(id, name)
                .map(category -> ResponseEntity.ok().body(category))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @GetMapping("/category/delete/{id}")
    void deleteCategoryById(@PathVariable Long id){
        categoryService.deleteById(id);
    }

    @GetMapping("/{restuarantId}")
    public List<MenuItem> listMenus(@PathVariable Long restuarantId)
    {
        return menuService.findAll();
    }



    //name string param
    //price double param
    //ingredients string (id1,id2,id3,id4...)
    //category long id

    @PostMapping("/menuItem/save")
    public ResponseEntity<MenuItem> saveMenuItem(@RequestParam(required = false) Long id,
                                                 @RequestParam String name,
                                                 @RequestParam Double price,
                                                 @RequestParam String ingredients,
                                                 @RequestParam Long categoryId,
                                                 @RequestParam MultipartFile file){

        return menuItemService.saveMenuItem(id, name, price, ingredients, categoryId, file)
                .map(menuItem -> ResponseEntity.ok().body(menuItem))
                .orElseGet(() -> ResponseEntity.badRequest().build());

    }

    @GetMapping("/menuItem/delete/{id}")
    public void deleteMenuItemById(@PathVariable Long id){
        menuItemService.deleteById(id);
    }


}
