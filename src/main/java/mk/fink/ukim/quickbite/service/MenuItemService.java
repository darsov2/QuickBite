package mk.fink.ukim.quickbite.service;

import mk.fink.ukim.quickbite.entites.MenuItem;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

public interface MenuItemService {

    Optional<MenuItem> saveMenuItem(Long id, String name, Double price, String ingredients, Long categoryId, MultipartFile file);
    void deleteById(Long id);
}
