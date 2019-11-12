<?php

namespace App\Form;

use App\Entity\ProductSearch;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class ProductSearchType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('keyWord',TextType::class,[
                "required" => false,
                "label" => false,
                "attr" => [
                    "placeholder" => "Search here",
                    "class" => "form-control"

                ]
            ])
            // ->add('sortByPrice',TextType::class,[
            //     "required" => false,
            //     "label" => false,
            //     "attr" => [
            //         "placeholder" => "price",
            //     ]
            // ])
            // ->add('sortBycategory',TextType::class,[
            //     "required" => false,
            //     "label" => false,
            //     "attr" => [
            //         "placeholder" => "category",
            //     ]
            // ])

        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ProductSearch::class,
            'method' => 'get',
            'csrf_protection' => false,
        ]);
    }
    public function getBlockPrefix()
    {
        return '';
    }
}
