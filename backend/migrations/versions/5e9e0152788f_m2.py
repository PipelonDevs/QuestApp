"""m2

Revision ID: 5e9e0152788f
Revises: 
Create Date: 2023-09-30 23:26:51.162306

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5e9e0152788f'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('city_challenge',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('created_by', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('course',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('description', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('tag',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('technology',
    sa.Column('name', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('name')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(), nullable=True),
    sa.Column('role', sa.String(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('city_challenge_technologies',
    sa.Column('city_challenge_id', sa.Integer(), nullable=False),
    sa.Column('technology_name', sa.String(), nullable=False),
    sa.ForeignKeyConstraint(['city_challenge_id'], ['city_challenge.id'], ),
    sa.ForeignKeyConstraint(['technology_name'], ['technology.name'], ),
    sa.PrimaryKeyConstraint('city_challenge_id', 'technology_name')
    )
    op.create_table('course_technologies',
    sa.Column('course_id', sa.Integer(), nullable=False),
    sa.Column('technology_name', sa.String(), nullable=False),
    sa.ForeignKeyConstraint(['course_id'], ['course.id'], ),
    sa.ForeignKeyConstraint(['technology_name'], ['technology.name'], ),
    sa.PrimaryKeyConstraint('course_id', 'technology_name')
    )
    op.create_table('difficulty',
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('course_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['course_id'], ['course.id'], ),
    sa.PrimaryKeyConstraint('name')
    )
    op.create_table('quest',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('is_completed', sa.Boolean(), nullable=True),
    sa.Column('comment', sa.Text(), nullable=True),
    sa.Column('course_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['course_id'], ['course.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('technology_tag',
    sa.Column('technology_name', sa.Integer(), nullable=False),
    sa.Column('tag_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['tag_id'], ['tag.id'], ),
    sa.ForeignKeyConstraint(['technology_name'], ['technology.name'], ),
    sa.PrimaryKeyConstraint('technology_name', 'tag_id')
    )
    op.create_table('user_city_challenge',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('city_challenge_id', sa.Integer(), nullable=False),
    sa.Column('is_finished', sa.Boolean(), nullable=True),
    sa.ForeignKeyConstraint(['city_challenge_id'], ['city_challenge.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'city_challenge_id')
    )
    op.create_table('user_course',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('course_id', sa.Integer(), nullable=False),
    sa.Column('is_finished', sa.Boolean(), nullable=True),
    sa.ForeignKeyConstraint(['course_id'], ['course.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'course_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_course')
    op.drop_table('user_city_challenge')
    op.drop_table('technology_tag')
    op.drop_table('quest')
    op.drop_table('difficulty')
    op.drop_table('course_technologies')
    op.drop_table('city_challenge_technologies')
    op.drop_table('user')
    op.drop_table('technology')
    op.drop_table('tag')
    op.drop_table('course')
    op.drop_table('city_challenge')
    # ### end Alembic commands ###
