package mk.fink.ukim.quickbite.service.impl;

import mk.fink.ukim.quickbite.entites.Category;
import mk.fink.ukim.quickbite.entites.Ingredient;
import mk.fink.ukim.quickbite.entites.MenuImages;
import mk.fink.ukim.quickbite.entites.MenuItem;
import mk.fink.ukim.quickbite.repository.CategoryRepository;
import mk.fink.ukim.quickbite.repository.IngredientRepository;
import mk.fink.ukim.quickbite.repository.MenuImagesRepository;
import mk.fink.ukim.quickbite.repository.MenuItemRepository;
import mk.fink.ukim.quickbite.service.MenuItemService;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
@CrossOrigin
public class MenuItemServiceImpl implements MenuItemService {

    private final MenuItemRepository menuItemRepository;
    private final CategoryRepository categoryRepository;
    private final IngredientRepository ingredientRepository;
    private final MenuImagesRepository menuImagesRepository;

    public MenuItemServiceImpl(MenuItemRepository menuItemRepository, CategoryRepository categoryRepository, IngredientRepository ingredientRepository, MenuImagesRepository menuImagesRepository){
        this.menuItemRepository = menuItemRepository;
        this.categoryRepository = categoryRepository;
        this.ingredientRepository = ingredientRepository;
        this.menuImagesRepository = menuImagesRepository;
    }

    public Optional<MenuItem> saveMenuItem(Long id, String name, Double price, String ingredients, Long categoryId, MultipartFile file){

        MenuImages img = new MenuImages();
        try
        {
            Path desktopPath = Paths.get(System.getProperty("user.home"), "Desktop\\images");
            Path filePath = desktopPath.resolve(file.getOriginalFilename());
            System.out.println(filePath);
            file.transferTo(filePath.toFile());
            img =menuImagesRepository.save(new MenuImages(filePath.toString()));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }


        List<Ingredient> ingredientsList = Arrays.stream(ingredients.split(","))
                .map(x->ingredientRepository.findById(Long.parseLong(x)).get()).toList();
        Category category = categoryRepository.findById(categoryId).get();

        MenuItem menuItem = new MenuItem();
//        name, price, ingredientsList, category, List.of(img)

        if(id != null){
         menuItem = menuItemRepository.findById(id).get();
        }

        menuItem.setName(name);
        menuItem.setCategory(category);
        menuItem.setPrice(price);
        menuItem.setIngredients(ingredientsList);
        menuItem.setImages(List.of(img));

        menuItem = menuItemRepository.save(menuItem);


        return Optional.of(menuItem);
    }

    @Override
    public void deleteById(Long id){
        MenuItem menuItem = menuItemRepository.findById(id).get();
        menuItemRepository.delete(menuItem);
    }





}
