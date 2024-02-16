package mk.fink.ukim.quickbite.service.impl;

import mk.fink.ukim.quickbite.entites.Category;
import mk.fink.ukim.quickbite.repository.CategoryRepository;
import mk.fink.ukim.quickbite.service.CategoryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService{

    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository){
        this.categoryRepository = categoryRepository;
    }

    public Optional<Category> saveCategory(Long categoryId, String name){
        Category category = new Category();

        if(categoryId != null){
            category = categoryRepository.findById(categoryId).get();
        }

        category.setName(name);

        categoryRepository.save(category);
        return Optional.of(category);
    }

    public List<Category> findAll()
    {
        return categoryRepository.findAll();
    }

    @Override
    public void deleteById(Long id){
        Category category = categoryRepository.findById(id).get();
        categoryRepository.delete(category);

    }
}
