<?php

/* home/home.html.twig */
class __TwigTemplate_05c96c4b04e6cfbdedc4c6a9071f88ecd4f44b3de27cd72b1bfb0e1a5c5c0aaf extends Twig_Template
{
    private $source;

    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        // line 1
        $this->parent = $this->loadTemplate("base.html.twig", "home/home.html.twig", 1);
        $this->blocks = [
            'title' => [$this, 'block_title'],
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doGetParent(array $context)
    {
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "home/home.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "home/home.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 2
    public function block_title($context, array $blocks = [])
    {
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        echo "Home";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 3
    public function block_body($context, array $blocks = [])
    {
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 4
        echo "
<div class=\"jumbotron text-center\">
    <div class=\"display\">
      <div class=\"container\">
        ";
        // line 8
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new Twig_Error_Runtime('Variable "form" does not exist.', 8, $this->source); })()), 'form_start');
        echo "
        <div class=\"row lead\">
            <div class=\"col-11 col-md-11 col-sm-11 xm-11\">
                ";
        // line 11
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new Twig_Error_Runtime('Variable "form" does not exist.', 11, $this->source); })()), "keyWord", []), 'row');
        echo "
            </div>
            <div class=\"col-1 col-md-1 col-sm-1 xm-1\">
            <div>
                <button class=\"btn btn-outline-success d-inline-block float-right\">   Search</button>
            </div>
            </div>
        </div>
        ";
        // line 19
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new Twig_Error_Runtime('Variable "form" does not exist.', 19, $this->source); })()), 'form_end');
        echo "
      </div>
    </div>
    <div class=\"container\">
       <div class=\"row mt-1\">
                <div class=\"col-4\">
                    <select class=\"form-control form-control-md\">
                        <option value=\"sortByPrice\">Sort By price</option>
                        <option value=\"\" >select product by category</option>
                    </select>
                </div>
                 <div class=\"col-4\">
                    <select class=\"form-control form-control-md\">
                        <option value=\"\">select product by category</option>
                        <option value=\"\" >select product by category</option>
                    </select>
                </div>
                 <div class=\"col-4\">
                    <select class=\"form-control form-control-md\">
                        <option  value=\"\">select product by category</option>
                        <option  value=\"\">select product by category</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- products start here  -->
<div class=\"container text-center mt-3 h6\">
    <div class=\"row\">
        ";
        // line 50
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["products"]) || array_key_exists("products", $context) ? $context["products"] : (function () { throw new Twig_Error_Runtime('Variable "products" does not exist.', 50, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["product"]) {
            // line 51
            echo "        <a class=\"text-dark\" href=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("product_show", ["id" => twig_get_attribute($this->env, $this->source, $context["product"], "id", [])]), "html", null, true);
            echo "\">
        <div class=\"col-lg-3 col-md-3 col-sm-6 xm-12 mb-4\">
            <div class=\"card\">
            
                <div class=\"card-body\">
                    ";
            // line 56
            if (twig_get_attribute($this->env, $this->source, $context["product"], "filename", [])) {
                // line 57
                echo "                        <img class=\"img-fluid\" src=\"";
                echo twig_escape_filter($this->env, $this->extensions['Vich\UploaderBundle\Twig\Extension\UploaderExtension']->asset($context["product"], "imageFile"), "html", null, true);
                echo "\" alt=\"card-img-top\" >
                     <p class=\"card-title btn p-0 \"> ";
                // line 58
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["product"], "name", []), "html", null, true);
                echo "</p>
                     <hr class=\"h6\">
                    <p class=\" text-right h6 btn p-0 \">";
                // line 60
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["product"], "price", []), "html", null, true);
                echo "€</p>
                    ";
            }
            // line 62
            echo "                    </a>
                </div>
            </div>
        </div>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['product'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 67
        echo "    </div>
    <div class=\"container\">
        <div class=\"navigation\">
            ";
        // line 70
        echo $this->extensions['Knp\Bundle\PaginatorBundle\Twig\Extension\PaginationExtension']->render($this->env, (isset($context["products"]) || array_key_exists("products", $context) ? $context["products"] : (function () { throw new Twig_Error_Runtime('Variable "products" does not exist.', 70, $this->source); })()));
        echo "
        </div>
    </div>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "home/home.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  174 => 70,  169 => 67,  159 => 62,  154 => 60,  149 => 58,  144 => 57,  142 => 56,  133 => 51,  129 => 50,  95 => 19,  84 => 11,  78 => 8,  72 => 4,  63 => 3,  45 => 2,  15 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% extends 'base.html.twig' %}
{% block title %}Home{% endblock %}
{% block body %}

<div class=\"jumbotron text-center\">
    <div class=\"display\">
      <div class=\"container\">
        {{form_start(form)}}
        <div class=\"row lead\">
            <div class=\"col-11 col-md-11 col-sm-11 xm-11\">
                {{ form_row(form.keyWord) }}
            </div>
            <div class=\"col-1 col-md-1 col-sm-1 xm-1\">
            <div>
                <button class=\"btn btn-outline-success d-inline-block float-right\">   Search</button>
            </div>
            </div>
        </div>
        {{form_end(form)}}
      </div>
    </div>
    <div class=\"container\">
       <div class=\"row mt-1\">
                <div class=\"col-4\">
                    <select class=\"form-control form-control-md\">
                        <option value=\"sortByPrice\">Sort By price</option>
                        <option value=\"\" >select product by category</option>
                    </select>
                </div>
                 <div class=\"col-4\">
                    <select class=\"form-control form-control-md\">
                        <option value=\"\">select product by category</option>
                        <option value=\"\" >select product by category</option>
                    </select>
                </div>
                 <div class=\"col-4\">
                    <select class=\"form-control form-control-md\">
                        <option  value=\"\">select product by category</option>
                        <option  value=\"\">select product by category</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- products start here  -->
<div class=\"container text-center mt-3 h6\">
    <div class=\"row\">
        {% for product in products %}
        <a class=\"text-dark\" href=\"{{ path('product_show', {'id': product.id}) }}\">
        <div class=\"col-lg-3 col-md-3 col-sm-6 xm-12 mb-4\">
            <div class=\"card\">
            
                <div class=\"card-body\">
                    {% if product.filename %}
                        <img class=\"img-fluid\" src=\"{{ vich_uploader_asset(product, 'imageFile') }}\" alt=\"card-img-top\" >
                     <p class=\"card-title btn p-0 \"> {{ product.name }}</p>
                     <hr class=\"h6\">
                    <p class=\" text-right h6 btn p-0 \">{{ product.price }}€</p>
                    {% endif %}
                    </a>
                </div>
            </div>
        </div>
        {% endfor %}
    </div>
    <div class=\"container\">
        <div class=\"navigation\">
            {{ knp_pagination_render(products) }}
        </div>
    </div>
{% endblock %}
    
       
", "home/home.html.twig", "/var/www/html/my_e_commerce/templates/home/home.html.twig");
    }
}
