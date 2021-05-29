#include<stdio.h>
main()
{
    int n, sum=0,i;
    printf("Enter the maximum number:")
    scanf("%d",&n);
    for(i=0;i<=n;i++)
    {
        if(i%2==0)
        {
            sum=sum+i;
        }
    }
    printf("Sum of all even numbers till %d: %sum",n,sum);
}